import { useContext, useEffect, useRef, useState } from "react";
import { sendEmail } from "../services/email.service";
import { NotificationContext } from "../providers/NotificationContext";
import { useTranslation } from "react-i18next";

interface ContactForm {
  title: string;
  name: string;
  email: string;
  message: string;
  submit: string;
  sending: string;
}

const FloatingLabelInput = ({ id, label, name, type = "text" }: any) => {
  const [hasContent, setHasContent] = useState(false);

  const handleBlur = (e: any) => {
    setHasContent(e.target.value !== "");
  };

  return (
    <div className="relative w-full h-12 my-4 dark:text-white text-dark-blue">
      <input
        id={id}
        className="absolute top-0 left-0 w-full h-full bg-transparent border-b border-dark focus:border-dark-blue focus:dark:border-white outline-none transition-all"
        type={type}
        name={name}
        onBlur={handleBlur}
        onChange={(e) => setHasContent(e.target.value !== "")}
        onFocus={() => setHasContent(true)}
        required
      />
      <label
        className={`absolute left-0 transition-all text-dark-blue-300 dark:text-light-blue duration-300 ease-in-out 
              ${hasContent ? "transform -translate-y-4 text-sm" : ""}`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setNotification } = useContext(NotificationContext);
  const { i18n, t } = useTranslation();
  const [contactForm, setContactForm] = useState<ContactForm>(
    () => t("contactForm", { returnObjects: true }) as ContactForm
  );

  useEffect(() => {
    setContactForm(t("contactForm", { returnObjects: true }) as ContactForm);
  }, [i18n.language]);

  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;

    const nameValue = form.querySelector<HTMLInputElement>("#name")?.value || "";
    const emailValue = form.querySelector<HTMLInputElement>("#email")?.value || "";
    const messageValue = form.querySelector<HTMLTextAreaElement>("#message")?.value || "";

    if (nameValue && emailValue && messageValue) {
      const params = {
        to_name: "Olga",
        user_name: nameValue,
        user_email: emailValue,
        message: messageValue
      };

      sendEmail(params).then((res: "SUCCESS" | "FAILED") => {
        if (res === "SUCCESS") {
          setNotification({ type: "success", message: "Message sent successfully!" });
        } else {
          setNotification({ type: "error", message: "Failed to send message." });
        }

        setIsSubmitting(false);
        form.reset();
      });
    }
  };

  return (
    <section className={`flex flex-col xs:w-3/4 xs:mx-auto lg:w-[40rem] lg:mr-40 pt-48`}>
      <h1 className="tracking-widest uppercase text-center text-3xl mb-4">{contactForm.title}</h1>
      <form ref={form} className="flex flex-col mt-8" onSubmit={send}>
        <FloatingLabelInput id="name" label={contactForm.name} name="user_name" />
        <FloatingLabelInput id="email" label={contactForm.email} type="user_email" />
        <FloatingLabelInput id="message" label={contactForm.message} name="message" />

        <button
          className="bg-salmon-dark hover:bg-salmon dark:bg-salmon-100 hover:dark:bg-salmon text-white hover:text-dark dark:text-dark hover:dark:text-white tracking-widest uppercase py-2 mt-8 transition-all duration-300 ease-in-out"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? contactForm.sending : contactForm.submit}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
