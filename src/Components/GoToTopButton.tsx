import { useEffect, useState } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
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
      } fixed bottom-20 right-40 z-50 cursor-pointer`}
      onClick={scrollToTop}
      onScroll={() => setIsScrolling(true)}
    >
      <ArrowUpCircleIcon className="text-light-blue size-11" />
    </div>
  );
}

export default GoToTopButton;
