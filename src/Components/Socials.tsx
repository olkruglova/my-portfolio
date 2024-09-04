import { faGithub, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function Socials() {
  const [iconsInView, setIconsInView] = useState<{ [key: string]: boolean }>({
    github: false,
    linkedin: false,
    facebook: false
  });

  const socialItems = [
    {
      icon: faGithub,
      link: "https://github.com/olkruglova",
      id: "github"
    },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/olga-kruglova-502b06154/",
      id: "linkedin"
    },
    {
      icon: faFacebook,
      link: "https://www.facebook.com/olga.kruglova.9849",
      id: "facebook"
    }
  ];

  useEffect(() => {
    const footer = document.getElementById("footer");

    const handleScroll = () => {
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();

      socialItems.forEach((item) => {
        const iconElement = document.getElementById(item.id);
        if (iconElement) {
          const iconRect = iconElement.getBoundingClientRect();

          setIconsInView((prev) => ({
            ...prev,
            [item.id]: footerRect.top < iconRect.bottom
          }));
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col fixed bottom-20 left-40 social z-50">
      {socialItems.map((item, index) => (
        <a
          key={index}
          id={item.id}
          className={`mb-3 ${
            iconsInView[item.id]
              ? "dark:text-light-blue text-dark-blue-500 hover:text-light-blue hover:dark:text-dark"
              : "text-dark-blue dark:text-dark-blue-500 hover:text-light-blue hover:dark:text-light-blue "
          } transition-all duration-300 ease-in-out`}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={item.icon} style={{ width: "33px", height: "33px" }} />
        </a>
      ))}
    </div>
  );
}

export default Socials;
