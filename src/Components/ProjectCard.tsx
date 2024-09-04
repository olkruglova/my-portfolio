import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function ProjectCard({ project, index }: any) {
  const { title, description, url, tags, background, codeURL } = project;
  const [isOnHover, setIsOnHover] = useState<boolean>(false);
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-row flex-wrap w-full mb-40 ${isEven ? "" : "flex-row-reverse"}`}
      onMouseEnter={() => setIsOnHover(true)}
      onMouseLeave={() => setIsOnHover(false)}
    >
      <div
        className={`basis-1/2 h-80 py-10 duration-300 ease-in-out ${
          isEven
            ? isOnHover
              ? "border-gradient-salmon pl-10 pr-5"
              : "border-gradient pl-10 pr-5"
            : isOnHover
            ? "border-gradient-salmon-revert pl-5 pr-10"
            : "border-gradient-revert pl-5 pr-10"
        } `}
      >
        <div className="w-full h-full flip-box bg-transparent">
          <div className="relative w-full h-full flip-box-inner cursor-pointer">
            <div className="absolute w-full h-full flip-box-front bg-opacity-90 flex flex-col justify-center items-center bg-gradient-to-tr from-dark-blue via-transparent to-dark-blue">
              <h2 className="text-2xl">{title}</h2>
            </div>

            <div className="absolute w-full h-full flip-box-back">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-full">
                  <div
                    className="w-full h-full bg-cover bg-top bg-no-repeat"
                    style={{ backgroundImage: `url(${background})` }}
                  ></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`basis-1/2 h-80 py-10 duration-300 ease-in-out ${
          isEven
            ? isOnHover
              ? "border-gradient-salmon-revert pl-5 pr-10"
              : "border-gradient-revert pl-5 pr-10"
            : isOnHover
            ? "border-gradient-salmon pl-10 pr-5"
            : "border-gradient pl-10 pr-5"
        }`}
      >
        <p className="text-sm">{description}</p>
        <div className="flex flex-row mt-10 tags">
          {tags.map((tag: string, index: number) => (
            <p
              key={`${index}-${tag}`}
              className="text-xs text-white dark:text-light-blue-400 bg-transparent-30 bg-dark-blue-400 bg-opacity-50 rounded-2xl py-px px-3 mr-2"
            >
              {tag}
            </p>
          ))}
        </div>

        <div className="flex flex-row self-end mt-8 links">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-dark-blue-500 hover:text-light-blue mr-3"
          >
            <ArrowTopRightOnSquareIcon className="size-5" />
          </a>
          <a
            href={codeURL}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-dark-blue-500 hover:text-light-blue"
          >
            <FontAwesomeIcon icon={faGithub} style={{ width: "20px", height: "20px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
