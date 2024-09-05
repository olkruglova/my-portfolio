import {
  XMarkIcon,
  MagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ArrowDownTrayIcon,
  PrinterIcon
} from "@heroicons/react/24/solid";
import { ProgressBar, Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin, ToolbarSlot } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../providers/ThemeContext";
import { RenderZoomOutProps, RenderZoomProps } from "@react-pdf-viewer/zoom";
import { RenderGoToPageProps, RenderNumberOfPagesProps } from "@react-pdf-viewer/page-navigation";

export const customToolbar = (Toolbar: any) => (
  <Toolbar>
    {(slots: ToolbarSlot) => {
      const {
        CurrentPageInput,
        GoToNextPage,
        GoToPreviousPage,
        ZoomIn,
        Zoom,
        ZoomOut,
        Download,
        Print,
        NumberOfPages
      } = slots;

      return (
        <div className="flex items-center justify-between bg-dark-blue w-full px-4 py-2 text-white">
          <div className="flex items-center space-x-2">
            <GoToPreviousPage>
              {(props: RenderGoToPageProps) => (
                <button
                  style={{
                    border: "none",
                    cursor: props.isDisabled ? "not-allowed" : "pointer",
                    padding: "8px"
                  }}
                  disabled={props.isDisabled}
                  onClick={props.onClick}
                >
                  <ChevronUpIcon className={`${props.isDisabled ? "text-gray-600" : "text-light-blue"} size-6`} />
                </button>
              )}
            </GoToPreviousPage>
            <CurrentPageInput />
            <NumberOfPages>
              {(props: RenderNumberOfPagesProps) => (
                <div className="p-2 border-none text-light-blue">of {props.numberOfPages}</div>
              )}
            </NumberOfPages>
            <GoToNextPage>
              {(props: RenderGoToPageProps) => (
                <button
                  style={{
                    border: "none",
                    cursor: props.isDisabled ? "not-allowed" : "pointer",
                    padding: "8px"
                  }}
                  disabled={props.isDisabled}
                  onClick={props.onClick}
                >
                  <ChevronDownIcon className={`${props.isDisabled ? "text-gray-600" : "text-light-blue"} size-6`} />
                </button>
              )}
            </GoToNextPage>
          </div>

          <div className="flex items-center space-x-2">
            <ZoomOut>
              {(props: RenderZoomOutProps) => (
                <button
                  style={{
                    border: "none",
                    cursor: "pointer",
                    padding: "8px"
                  }}
                  onClick={props.onClick}
                >
                  <MagnifyingGlassMinusIcon className="text-light-blue size-6" />
                </button>
              )}
            </ZoomOut>

            <Zoom>
              {(props: RenderZoomProps) => (
                <span className="text-light-blue">{`${Math.round(props.scale * 100)}%`}</span>
              )}
            </Zoom>

            <ZoomIn>
              {(props: RenderZoomOutProps) => (
                <button
                  style={{
                    border: "none",
                    cursor: "pointer",
                    padding: "8px"
                  }}
                  onClick={props.onClick}
                >
                  <MagnifyingGlassPlusIcon className="text-light-blue size-6" />
                </button>
              )}
            </ZoomIn>
          </div>
          <div className="flex items-center space-x-2">
            <Download>
              {(props: any) => (
                <button
                  style={{
                    border: "none",
                    cursor: "pointer",
                    padding: "8px"
                  }}
                  onClick={props.onClick}
                >
                  <ArrowDownTrayIcon className="text-light-blue size-6" />
                </button>
              )}
            </Download>
            <Print>
              {(props: any) => (
                <button
                  style={{
                    border: "none",
                    cursor: "pointer",
                    padding: "8px"
                  }}
                  onClick={props.onClick}
                >
                  <PrinterIcon className="text-light-blue size-6" />
                </button>
              )}
            </Print>
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
