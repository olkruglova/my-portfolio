import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard({ project, index }: any) {
  const { title, description, url, tags, background, codeURL } = project;
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-row flex-wrap w-full mb-40 ${
        isEven ? "" : "flex-row-reverse"
      }`}
    >
      <div
        className={`basis-1/2 h-80 py-10 ${
          isEven
            ? "border-gradient pl-10 pr-5"
            : "border-gradient-revert pl-5 pr-10"
        }`}
      >
        <div className="w-full h-full flip-box bg-transparent">
          <div className="relative w-full h-full flip-box-inner cursor-pointer">
            <div className="absolute w-full h-full flip-box-front bg-opacity-90 flex flex-col justify-center items-center bg-gradient-to-tr from-dark-blue via-transparent to-dark-blue">
              <h2 className="text-2xl text-light-blue">{title}</h2>
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
        className={`basis-1/2 h-80 py-10 ${
          isEven
            ? "border-gradient-revert pl-5 pr-10"
            : "border-gradient pl-10 pr-5"
        }`}
      >
        <p className="text-sm text-white">{description}</p>
        <div className="flex flex-row mt-10 tags">
          {tags.map((tag: string, index: number) => (
            <p
              key={`${index}-${tag}`}
              className="text-xs text-light-blue-400 bg-transparent border border-light-blue-400 rounded-2xl px-1 mr-2"
            >
              {tag}
            </p>
          ))}
        </div>
        ''
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
            <FontAwesomeIcon
              icon={faGithub}
              style={{ width: "20px", height: "20px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
