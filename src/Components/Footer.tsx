import Arc from "./Arc";
import ContactForm from "./ContactForm";
import { ArcOptions } from "./Experience";

function Footer() {
  const opt: ArcOptions = {
    color: "#A9D6E5",
    size: "lg",
    strokeWidth: 2,
    animation: true,
    strokeDasharray: "2,10"
  };

  return (
    <div id="footer" className="h-screen w-full flex flex-row justify-end bg-dark-blue shadow-top relative">
      <ContactForm />
    </div>
  );
}

export default Footer;
