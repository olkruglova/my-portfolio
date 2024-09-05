import { ArrowDownTrayIcon, EyeIcon } from "@heroicons/react/24/solid";
import JobCard from "../Components/JobCard";
import { useState } from "react";
import Tooltip from "../Components/Tooltip";
import PDFViewer from "../Components/PDFViewer";

function Resume() {
  const today = new Date();
  const thisYear = today.getFullYear();
  const [previewPDF, setPreviePDF] = useState(false);
  const [isEyeHovered, setIsEyeHovered] = useState(false);
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);
  const pdfUrl: string = "./src/assets/docs/Olga_Kruhlova_CV.pdf";

  const jobs = [
    {
      jobTitle: "Frontend software engineer",
      clientLocation: "England",
      sector: "Aerospace",
      description: `Integrated Lifing is a platform for engines fleets monitoring. Supports engine 
      removal planning and engineering assessment to support Red-Top and safety 
      investigations. Supports operational readiness and planning of the aircraft`,
      years: `2022 - ${thisYear}`,
      responsibilities: [
        `Utilizing Angular framework, particularly Angular 15 and above, to rewrite and optimize 
      existing JavaScript application`,
        `Creating web components using Typescript and KendoUI`,
        `Implementing UI features using Angular and PrimeNG`,
        `Managing dependencies and libraries within the Angular ecosystem, ensuring compatibility 
      and optimal performance`,
        `Employing testing frameworks (Jasmine, Karma) and debugging tools`,
        `Code refactoring and code review`,
        `Troubleshooting and resolving front-end issues`,
        `Integrating third-party APIs and services when necessary`,
        `Effective communication and collaboration with UX designers; reading and implementing 
      Figma mocks`
      ],
      tools: [
        "Angular14+",
        "Typescript",
        "RxJS",
        "D3.js",
        "KendoUI",
        "PrimeNG",
        "Bootstrap",
        "HTML5",
        "ES6",
        "SCSS",
        "Jasmine",
        "Karma"
      ]
    },
    {
      jobTitle: "Frontend developer",
      clientLocation: "Germany",
      sector: "Education",
      description: `HR tech startup with roots in both Düsseldorf and Berlin. Empowers companies in 
      employee upskilling. Using data identifies skill gaps and personalizes the learning 
      experience based on individual skills, status or proficiency levels. Offers customers 
      action-oriented business simulations or serious games into platform, focusing on 
      employee upskilling.`,
      years: "2020-2022",
      responsibilities: [
        `Creating dynamic, single-page web applications using React and Material-UI`,
        `Collaborating closely with UX designers, translating their Adobe mockups into interactive 
      website elements`,
        `Implementing responsive web design techniques to ensure optimal performance on various 
      devices and screen resolutions (desktop, tablet, mobile)`,
        `Maintaining close cooperation with the Backend team to integrate front-end and back-end 
      functionalities`,
        `Crafting comprehensive unit tests`,
        `Participating in code reviews`
      ],
      tools: ["React", "Typescript", "Material-UI", "HTML5", "Karma", "Jest"]
    },
    {
      jobTitle: "Frontend developer",
      clientLocation: "Poland",
      sector: " Private Banking",
      description: `AntiFraud Hub is a fraud prevention platform.`,
      years: "2019",
      responsibilities: [
        `Updating the AngularJS application components to a newer version (Angular 2)`,
        `Improving existing web application, enhancing it functionality and appearance`,
        `Implementation of individual components`
      ],
      tools: ["AngularJS", "Angular2", "Typescript", "HTML5", "CSS"]
    },
    {
      jobTitle: "Frontend developer intern",
      clientLocation: "England",
      sector: "Aerospace",
      description: `The project is directed to reduce engines lifecycle costs, provide rapid worldwide
      operational response to issues, and improve the safety and quality of high value 
      installed infrastructures.`,
      years: "2019",
      responsibilities: [
        `Contributed to the design and refinement of user interfaces, focusing on usability, 
      accessibility, and aesthetics. Implemented responsive design principles to ensure compatibility 
      across various devices and screen sizes`,
        `Resolved various bugs and issues within the front-end codebase to enhance the stability and 
      performance of the application`,
        `Actively participated in team meetings, discussions. Communicated effectively with team 
      members and stakeholders to gather requirements and provide updates`,
        `Expanded knowledge and skills in front-end development technologies, frameworks, and 
      tools. Experimented with new techniques and approaches`
      ],
      tools: ["Angular2", "Typescript", "D3.js", "HTML5", "ES6", "SCSS"]
    }
  ];

  return (
    <>
      <div className="flex flex-col py-10 justify-end items-end">
        <h1 className="text-4xl">Resume</h1>

        <div className="mt-8 flex flex-row">
          <div className="relative mr-4">
            {isEyeHovered && <Tooltip text="Preview PDF" />}
            <EyeIcon
              className="text-dark-blue dark:text-light-blue hover:text-light-blue hover:dark:text-dark-blue size-6 cursor-pointer transition-all duration-300 ease-in-out"
              onMouseEnter={() => setIsEyeHovered(true)}
              onMouseLeave={() => setIsEyeHovered(false)}
              onClick={() => setPreviePDF(true)}
            />
          </div>
          <div className="relative">
            {isDownloadHovered && <Tooltip text="Download PDF" />}
            <ArrowDownTrayIcon
              className="text-dark-blue dark:text-light-blue hover:text-light-blue hover:dark:text-dark-blue size-6 cursor-pointer transition-all duration-300 ease-in-out"
              onMouseEnter={() => setIsDownloadHovered(true)}
              onMouseLeave={() => setIsDownloadHovered(false)}
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
