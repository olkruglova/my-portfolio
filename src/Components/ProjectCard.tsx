function ProjectCard({ project, index }: any) {
  const { title, description, url, tags, background } = project;
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-row w-full mb-40 ${
        isEven ? "" : "flex-row-reverse"
      }`}
    >
      <div className="w-[34rem] h-80 p-10 border-gradient">
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

      <div className="ml-20 w-[24rem] h-80 py-10 px-6 border-gradient-revert">
        <p className="text-sm text-white">{description}</p>
        <div className="flex flex-row mt-10">
          {tags.map((tag: string, index: number) => (
            <p
              key={`${index}-${tag}`}
              className="text-xs text-light-blue bg-transparent border border-light-blue rounded-2xl px-1 mr-2"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
