// import pixelAltMaker from "src/assets/images/pixel_art.png";

import ProjectCard from "../Components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Pixel Art Maker",
      description:
        "The Pixel Art Maker is a creative tool that allows users to design and create their own pixel art. Users can select colors from a palette and fill in the grid to form images, patterns, or characters. Try to draw something beautiful with this pixel art maker.",
      url: "https://olkruglova.github.io/canvas-pixel-art/",
      background: "./src/assets/images/pixel_art.png",
      tags: ["Javascript", "CSS"],
    },
    {
      title: "Matching Game",
      description:
        "The Matching Game is an interactive puzzle where players test their memory by flipping over cards to find pairs. Each card features an image, and the goal is to match all the pairs as quickly as possible. The game sharpens memory, concentration, and pattern recognition skills, making it a fun and challenging activity for all ages.",
      url: "https://olkruglova.github.io/my-memory-game-2/",
      background: "./src/assets/images/matching_game.png",
      tags: ["Javascript", "CSS"],
    },
  ];
  return (
    <>
      <div className="flex flex-col py-10 justify-end items-end">
        <h1 className="text-4xl text-white">Projects</h1>

        <div className="text-md text-white mt-8 flex flex-col justify-end items-end">
          <p className="mb-2">
            Here are some of the projects I’ve worked on over time, both past
            and present.
          </p>
          <p className="mb-2">Feel free to explore them.</p>
        </div>

        <div className="w-full mt-[10rem] relative">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${index}-${project.title}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
