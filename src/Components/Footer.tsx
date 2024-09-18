import ContactForm from "./ContactForm";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Tooltip from "./Tooltip";
import { useTranslation } from "react-i18next";
import useDevice from "../hooks/useDevice";
import Socials from "./Socials";

function Footer() {
  const { t } = useTranslation();
  const thisYear = new Date().getFullYear();
  const [isPastIconHovered, setIsPastIconHovered] = useState(false);
  const isMobile = useDevice("mobile");
  const isTablet = useDevice("tablet");

  const redirectToPrevPortfolio = () => {
    window.location.href = "https://olkruglova.github.io/portfolio-fend/";
  };

  return (
    <div
      id="footer"
      className="h-screen w-full flex flex-row justify-end bg-white dark:bg-dark-blue shadow-top relative"
    >
      {(isTablet || isMobile) && <Socials />}
      <ContactForm />
      <div
        className="w-full h-10 pb-10 xs:pr-14 lg:pr-40
        flex flex-row justify-end items-center bg-transparent absolute bottom-0 left-0 text-dark-blue dark:text-light-blue"
      >
        <p className=" dark:font-thin">
          <span className="tracking-widest text-sm uppercase">©&nbsp;Portfolio O.K.&nbsp;|&nbsp;</span>
          <span>{thisYear}</span>
        </p>
        <div className="relative cursor-pointer ml-3 ">
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            style={{ width: "22px", height: "22px" }}
            spin
            spinReverse
            onMouseEnter={() => setIsPastIconHovered(true)}
            onMouseLeave={() => setIsPastIconHovered(false)}
            onClick={() => redirectToPrevPortfolio()}
          />

          {isPastIconHovered && <Tooltip text={t("goBackInTime")} />}
        </div>
      </div>
    </div>
  );
}

export default Footer;
