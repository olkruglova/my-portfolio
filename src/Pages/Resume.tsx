import { ArrowDownTrayIcon, EyeIcon } from "@heroicons/react/24/solid";
import JobCard from "../Components/JobCard";
import { useState } from "react";
import Tooltip from "../Components/Tooltip";
import PDFViewer from "../Components/PDFViewer";
import { downloadFile } from "../services/download.service";
import { useTranslation } from "react-i18next";

interface Job {
  jobTitle: string;
  clientLocation: string;
  sector: string;
  description: string;
  years: string;
  responsibilities: string[];
  tools: string[];
}

function Resume() {
  const { t } = useTranslation();
  const today = new Date();
  const thisYear = today.getFullYear();
  const [previewPDF, setPreviePDF] = useState(false);
  const [isEyeHovered, setIsEyeHovered] = useState(false);
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);
  const pdfUrl: string = "./assets/docs/Olga_Kruglova_CV.pdf";

  const jobs = t("resume.jobs", { returnObjects: true, thisYear }) as Job[];

  const downloadPDF = () => {
    const fileUrl = "./assets/docs/Olga_Kruglova_CV.pdf";
    const fileName = "Olga_Kruglova_CV.pdf";

    downloadFile(fileUrl, fileName);
  };

  return (
    <>
      <div className="flex flex-col py-10 justify-end items-end">
        <h1 className="text-4xl">{t("resume.title")}</h1>

        <div className="mt-8 flex flex-row">
          <div className="relative mr-4">
            {isEyeHovered && <Tooltip text={t("resume.previewTooltip")} />}
            <EyeIcon
              className="text-dark-blue dark:text-light-blue hover:text-light-blue hover:dark:text-dark-blue size-6 cursor-pointer transition-all duration-300 ease-in-out"
              onMouseEnter={() => setIsEyeHovered(true)}
              onMouseLeave={() => setIsEyeHovered(false)}
              onClick={() => setPreviePDF(true)}
            />
          </div>
          <div className="relative">
            {isDownloadHovered && <Tooltip text={t("resume.downloadTooltip")} />}
            <ArrowDownTrayIcon
              className="text-dark-blue dark:text-light-blue hover:text-light-blue hover:dark:text-dark-blue size-6 cursor-pointer transition-all duration-300 ease-in-out"
              onMouseEnter={() => setIsDownloadHovered(true)}
              onMouseLeave={() => setIsDownloadHovered(false)}
              onClick={() => downloadPDF()}
            />
          </div>
        </div>

        <div className="w-full mt-20 relative">
          {jobs.map((job, index) => {
            return <JobCard key={index} job={job} index={index} />;
          })}
        </div>
      </div>

      {previewPDF && <PDFViewer fileUrl={pdfUrl} onClose={() => setPreviePDF(false)} />}
    </>
  );
}

export default Resume;
