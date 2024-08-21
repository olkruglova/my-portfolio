import {
  ArrowDownTrayIcon,
  MapPinIcon,
  ChartPieIcon,
  DocumentIcon,
  CheckBadgeIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";

function Resume() {
  const today = new Date();
  const thisYear = today.getFullYear();

  const jobs = [
    {
      jobTitle: "Softwere Developer",
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
      Figma mocks`,
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
        "Karma",
      ],
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
        `Participating in code reviews`,
      ],
      tools: ["React", "Typescript", "Material-UI", "HTML5", "Karma", "Jest"],
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
        `Implementation of individual components`,
      ],
      tools: ["AngularJS", "Angular2", "Typescript", "HTML5", "CSS"],
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
      tools. Experimented with new techniques and approaches`,
      ],
      tools: ["Angular2", "Typescript", "D3.js", "HTML5", "ES6", "SCSS"],
    },
  ];

  return (
    <>
      <div className="flex flex-col py-10 justify-end items-end">
        <h1 className="text-4xl text-white">Resume</h1>

        <div className="mt-8">
          <ArrowDownTrayIcon className="text-light-blue size-6 cursor-pointer" />
        </div>

        <div className="w-full mt-20 relative">
          {jobs.map((job, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index}>
                <div className={`flex flex-col w-full`}>
                  <div
                    className={`p-10 text-light-blue-400 mt-4 ${
                      isEven
                        ? "border-gradient-revert pl-5 pr-10"
                        : "border-gradient pl-10 pr-5"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-xl font-semibold ">
                          {job.jobTitle}
                        </h2>
                      </div>
                      <p className="text-sm text-dark-blue-100">{job.years}</p>
                    </div>

                    <div className="flex flex-col mt-4">
                      <div className="text-sm text-gray-700">
                        <strong>Sector:</strong> {job.sector}
                      </div>
                      <div className="text-sm text-gray-700 mt-2">
                        <strong>Description:</strong> {job.description}
                      </div>
                      <div className="mt-2">
                        <details>
                          <summary className="cursor-pointer text-sm text-blue-600">
                            Responsibilities
                          </summary>
                          <ul className="text-sm text-gray-700 list-disc list-inside mt-2">
                            {job.responsibilities.map((responsibility, idx) => (
                              <li key={idx}>{responsibility}</li>
                            ))}
                          </ul>
                        </details>
                      </div>
                      <div className="mt-2">
                        <details>
                          <summary className="cursor-pointer text-sm text-blue-600">
                            Tools & Technologies
                          </summary>
                          <ul className="text-sm text-gray-700 list-disc list-inside mt-2">
                            {job.tools.map((tool, idx) => (
                              <li key={idx}>{tool}</li>
                            ))}
                          </ul>
                        </details>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Resume;
