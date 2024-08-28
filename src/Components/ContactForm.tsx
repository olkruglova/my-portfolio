import { useContext, useRef, useState } from "react";
import { sendEmail } from "../services/email.service";
import { NotificationContext } from "../providers/NotificationContext";

const FloatingLabelInput = ({ id, label, name, type = "text" }: any) => {
  const [hasContent, setHasContent] = useState(false);

  const handleBlur = (e: any) => {
    setHasContent(e.target.value !== "");
  };

  return (
    <div className="relative w-full h-12 my-4">
      <input
        id={id}
        className="text-white absolute top-0 left-0 w-full h-full bg-transparent border-b border-dark focus:border-white outline-none transition-all"
        type={type}
        name={name}
        onBlur={handleBlur}
        onChange={(e) => setHasContent(e.target.value !== "")}
        onFocus={() => setHasContent(true)}
        required
      />
      <label
        className={`absolute left-0 transition-all text-gray-500 duration-300 ease-in-out 
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
    <section className="flex flex-col w-[40rem] mr-40 pt-40">
      <h1 className="tracking-widest uppercase text-white text-center text-3xl mb-4">Get in touch</h1>
      <form ref={form} className="flex flex-col mt-8" onSubmit={send}>
        <FloatingLabelInput id="name" label="Name" name="user_name" />
        <FloatingLabelInput id="email" label="E-mail" type="user_email" />
        <FloatingLabelInput id="message" label="Message" name="message" />

        <button
          className="bg-salmon-100 hover:bg-salmon text-dark-blue-500 uppercase tracking-widest py-2 mt-8"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Say Hello"}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
