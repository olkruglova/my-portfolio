import ContactForm from "./ContactForm";
import { ArcOptions } from "./Experience";

function Footer() {
  //   const opt: ArcOptions = {
  //     color: "#A9D6E5",
  //     size: "lg",
  //     strokeWidth: 2,
  //     animation: true,
  //     strokeDasharray: "2,10"
  //   };
  const thisYear = new Date().getFullYear();

  return (
    <div
      id="footer"
      className="h-screen w-full flex flex-row justify-end bg-white dark:bg-dark-blue shadow-top relative"
    >
      <ContactForm />
      <div className="w-full h-10 pb-10 pr-40 flex flex-row justify-end items-center bg-transparent absolute bottom-0 left-0">
        <p className="text-dark-blue dark:text-light-blue dark:font-thin">
          <span className="tracking-widest text-sm uppercase">©&nbsp;Portfolio O.K.&nbsp;|&nbsp;</span>
          <span>{thisYear}</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
