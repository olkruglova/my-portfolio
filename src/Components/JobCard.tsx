import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function JobCard({ job }: any) {
  const [isOnHover, setIsOnHover] = useState<boolean>(false);

  return (
    <div
      className="flex flex-row items-center mb-10 relative"
      onMouseEnter={() => setIsOnHover(true)}
      onMouseLeave={() => setIsOnHover(false)}
    >
      <div className="w-[20%] flex flex-row justify-center items-center py-2 xs:pr-4 md:pr-10">
        <p
          className={`text-xl ${isOnHover ? "text-salmon-dark dark:text-salmon-100 font-bold" : "text-light-blue-500"}`}
        >
          {job.years}
        </p>
      </div>

      <div className={`w-[80%] flex flex-row transition-all duration-300 ease-in-out`}>
        <div className="relative flex flex-row items-center">
          <div
            className={`divider ${
              isOnHover ? "bg-salmon-dark dark:bg-salmon-100" : "bg-light-blue-500"
            } rounded-lg w-px h-full absolute top-0 bottom-0`}
          ></div>
          <div
            className={`w-[9px] h-[9px] absolute top-1/2 left-0 -m-[4.5px] transform -translate-y-1/2 duration-1000 ease-in-out origin-center ${
              isOnHover
                ? "rounded-none  bg-salmon-dark dark:bg-salmon-100 transition-transform rotate-[315deg]"
                : "rounded-full bg-light-blue-500"
            }`}
          ></div>
        </div>

        <div className={`xs:px-4 md:pl-10 md:pr-4 py-4 transition-shadow duration-300 ease-in-out`}>
          <h2 className="text-2xl font-semibold text-dark-blue dark:text-light-blue">{job.jobTitle}</h2>
          <div className="flex flex-col mt-4">
            <div className="text-sm">
              <strong className="text-dark-blue dark:text-light-blue">Sector: </strong>
              {job.sector}
            </div>
            <div className="text-sm mt-2">
              <strong className="text-dark-blue dark:text-light-blue">Description: </strong>
              {job.description}
            </div>
            <div className="flex flex-row justify-start mt-5">
              <div className={`lg:w-[450px] flex-col duration-300 ease-in-out pr-2`}>
                <div className="flex flex-row">
                  <ChevronRightIcon
                    className={`w-5 h-5 text-dark-blue dark:text-light-blue ${
                      isOnHover ? "transition-transform rotate-90 " : ""
                    } duration-300 ease-in-out`}
                  />
                  <span className="ml-2">
                    <strong className="text-dark-blue dark:text-light-blue">Responsibilities</strong>
                  </span>
                </div>
                <ul
                  className={`ml-2 text-sm list-disc list-inside mt-2 transition-all duration-500 ease-in-out overflow-hidden ${
                    isOnHover ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {job.responsibilities.map((responsibility: any, idx: number) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              <div className={`lg:w-[300px] flex-col duration-300 ease-in-out pl-2`}>
                <div className="flex flex-row">
                  <ChevronRightIcon
                    className={`w-5 h-5 text-dark-blue dark:text-light-blue ${
                      isOnHover ? "transition-transform rotate-90 " : ""
                    } duration-300 ease-in-out`}
                  />
                  <span className="ml-2">
                    <strong className="text-dark-blue dark:text-light-blue">Tools & Technologies</strong>
                  </span>
                </div>
                <ul
                  className={`ml-2 text-sm list-disc list-inside mt-2 transition-all duration-500 ease-in-out overflow-hidden ${
                    isOnHover ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {job.tools.map((tool: any, idx: number) => (
                    <li key={idx}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
