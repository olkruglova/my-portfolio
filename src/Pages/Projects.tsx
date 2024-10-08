import { useTranslation } from "react-i18next";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.projects.pixelArt.title"),
      description: t("projects.projects.pixelArt.description"),
      url: "https://olkruglova.github.io/canvas-pixel-art/",
      codeURL: "https://github.com/olkruglova/canvas-pixel-art",
      background: "./assets/images/pixel_art_maker.png",
      tags: ["Javascript", "jQuery", "CSS"]
    },
    {
      title: t("projects.projects.matchingGame.title"),
      description: t("projects.projects.matchingGame.description"),
      url: "https://olkruglova.github.io/my-memory-game-2/",
      codeURL: "https://github.com/olkruglova/my-memory-game-2",
      background: "./assets/images/matching_game.png",
      tags: ["Javascript", "CSS"]
    }
  ];
  return (
    <>
      <div className="flex flex-col py-10 justify-end items-end">
        <h1 className="text-4xl">{t("projects.title")}</h1>

        <div className="text-md mt-8 flex flex-col justify-end items-end">
          <p className="mb-2 text-right">{t("projects.description.line1")}</p>
          <p className="mb-2 text-right">{t("projects.description.line2")}</p>
        </div>

        <div className="w-full xs:mt-[4rem] md:mt-[10rem] relative">
          {projects.map((project, index) => (
            <ProjectCard key={`${index}-${project.title}`} project={project} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
