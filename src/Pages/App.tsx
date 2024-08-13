import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Toolbar from "../Components/Toolbar";
import Navbar from "../Components/Navbar";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

const Profile = lazy(() => import("./Profile"));

function MainContent() {
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

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const overlay = overlayRef.current;
    if (overlay) {
      overlay.addEventListener("mousemove", handleMouseMove);
      overlay.addEventListener("mouseenter", handleMouseEnter);
      overlay.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (overlay) {
        overlay.removeEventListener("mousemove", handleMouseMove);
        overlay.removeEventListener("mouseenter", handleMouseEnter);
        overlay.removeEventListener("mouseleave", handleMouseLeave);
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
        <div className="flex flex-row px-24 py-20">
          <div className="flex-[20%] flex justify-start">
            <Navbar />
          </div>
          <div className="flex-[80%] flex justify-end">
            <div className="flex flex-col">
              <Toolbar />

              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" Component={Profile} />
                  {/* <Route path="/guides" element={<Guides />}>
                <Route path="shadows/:shadowType" Component={Shadows} />
                <Route path="text" Component={Text} />
                <Route path="animations/:animationType" Component={Animations} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/articles" element={<Articles />} /> */}
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
