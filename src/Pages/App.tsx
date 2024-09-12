import { Routes, Route, BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import { lazy, Suspense, useContext, useEffect, useRef, useState } from "react";
import Toolbar from "../Components/Toolbar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Socials from "../Components/Socials";
import { NotificationProvider } from "../providers/NotificationProvider";
import Notification from "../Components/Notification";
import GoToTopButton from "../Components/GoToTopButton";
import { ThemeProvider } from "../providers/ThemeProvider";
import { ThemeContext } from "../providers/ThemeContext";
import Loader from "../Components/Loader";

function App() {
  return (
    <Router basename="/my-portfolio">
      <ThemeProvider>
        <MainContent />
      </ThemeProvider>
    </Router>
  );
}

const Profile = lazy(() => import("./Profile"));
const Projects = lazy(() => import("./Projects"));
const Resume = lazy(() => import("./Resume"));

function MainContent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const overlayRef = useRef<HTMLDivElement>(null);
  const { isDarkTheme } = useContext(ThemeContext);

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
    if (overlay) {
      overlay.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (overlay) {
        overlay.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <NotificationProvider>
      <div className="relative text-dark-blue dark:text-white">
        <div className="bg-main-bg bg-cover bg-no-repeat w-full h-[calc(100vh+700px)] overflow-x-hidden"></div>
        <div
          ref={overlayRef}
          className="absolute top-0 left-0 w-full h-[calc(100vh+700px)] pointer-events-auto"
          style={{
            background: isDarkTheme
              ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.95) 200px, rgba(0,0,0,0.95) 200px)`
              : "rgba(255,255,255,0.85)"
          }}
        >
          <div className="flex flex-row px-40 py-20">
            <div className="flex-[20%] min-w-[173px] flex justify-start">
              <Navbar />
            </div>
            <div className="flex-[80%] flex justify-end">
              <div className="flex flex-col w-[calc(100%-1px)]">
                <Toolbar />

                <Suspense fallback={<Loader />}>
                  <Routes>
                    <Route path="/" Component={Profile} />
                    <Route path="/projects" Component={Projects} />
                    <Route path="/resume" Component={Resume} />
                  </Routes>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Socials />
      <Notification />
      <GoToTopButton />
    </NotificationProvider>
  );
}

export default App;
