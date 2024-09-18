import { useEffect, useState } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import useDevice from "../hooks/useDevice";

function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const isMobile = useDevice("mobile");
  const isTablet = useDevice("tablet");

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 1200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div
      className={`go-to-top-button ${isVisible ? "visible" : "invisible"} ${
        isScrolling ? "scrolling" : ""
      } fixed bottom-20 z-50 cursor-pointer ${isMobile || isTablet ? "right-14" : "right-40"}`}
      onClick={scrollToTop}
      onScroll={() => setIsScrolling(true)}
    >
      <ArrowUpCircleIcon className="dark:text-light-blue text-dark-blue-500 hover:text-light-blue hover:dark:text-dark size-11 transition-all duration-300 ease-in-out" />
    </div>
  );
}

export default GoToTopButton;
