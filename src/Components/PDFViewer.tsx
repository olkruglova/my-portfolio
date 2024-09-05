import { XMarkIcon } from "@heroicons/react/24/solid";
import { ProgressBar, Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin, ToolbarSlot } from "@react-pdf-viewer/default-layout"; // Correct import for ToolbarSlot
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../providers/ThemeContext";

export const customToolbar = (Toolbar: any) => (
  <Toolbar>
    {(slots: ToolbarSlot) => {
      const {
        NumberOfPages,
        Zoom,
        ZoomIn,
        ZoomOut,
        GoToNextPage,
        GoToPreviousPage,
        CurrentPageInput,
        Download,
        Print
      } = slots;

      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            padding: "0 20px"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <NumberOfPages />
            <GoToPreviousPage />
            <CurrentPageInput />
            <GoToNextPage />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <ZoomOut />
            <Zoom />
            <ZoomIn />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <Download />
            <Print />
          </div>
        </div>
      );
    }}
  </Toolbar>
);

function PDFViewer({ fileUrl, onClose }: { fileUrl: string; onClose: () => void }) {
  const { isDarkTheme } = useContext(ThemeContext);
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar: customToolbar,
    sidebarTabs: () => []
  });

  useEffect(() => {
    const socials = document.getElementById("socials");
    if (socials) {
      socials.style.display = "none";
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      if (socials) {
        socials.style.display = "flex";
      }
    };
  }, []);

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-80 z-100">
        <div className="absolute top-4 right-4 cursor-pointer" onClick={onClose}>
          <XMarkIcon className="text-white size-6" />
        </div>

        <div
          style={{
            height: "90vh",
            width: "80vw",
            margin: "60px auto"
          }}
        >
          <Viewer
            fileUrl={fileUrl}
            plugins={[defaultLayoutPluginInstance]}
            theme={isDarkTheme ? "dark" : "light"}
            defaultScale={1}
            renderLoader={(percentages: number) => (
              <div style={{ width: "240px" }}>
                <ProgressBar progress={Math.round(percentages)} />
              </div>
            )}
          />
        </div>
      </div>
    </Worker>
  );
}

export default PDFViewer;
