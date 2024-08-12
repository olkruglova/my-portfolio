import { useState, useRef, useEffect } from "react";
import Content from "./Content";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (overlayRef.current) {
        const rect = overlayRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        setMousePosition({ x: mouseX, y: mouseY });
      }
    };

    const overlay = overlayRef.current;
    overlay?.addEventListener("mousemove", handleMouseMove);
    overlay?.addEventListener("mouseenter", () => setIsHovered(true));
    overlay?.addEventListener("mouseleave", () => setIsHovered(false));

    return () => {
      if (overlay) {
        overlay.removeEventListener("mousemove", handleMouseMove);
        overlay.removeEventListener("mouseenter", () => setIsHovered(true));
        overlay.removeEventListener("mouseleave", () => setIsHovered(false));
      }
    };
  }, []);

  return (
    <div className="relative">
      <div className="bg-main-bg bg-cover bg-no-repeat w-full h-[calc(100vh+1000px)] overflow-x-hidden"></div>
      <div
        ref={overlayRef}
        className="bg-dark-blue-500 absolute top-0 left-0 w-full h-full pointer-events-auto"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.95) 200px, rgba(0,0,0,0.95) 200px)`
            : "rgba(0,0,0,0.95)",
        }}
      >
        <Content />
      </div>
    </div>
  );
}

export default App;
