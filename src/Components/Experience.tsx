import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";
import Arc from "./Arc";

export type ArcOptions = {
  color: string;
  size: "sm" | "md" | "lg";
  animation: boolean;
  strokeWidth?: number;
  strokeDasharray?: string;
  animationReverse?: boolean;
  content?: Content[];
};

export type Content = {
  year: number;
  title: string;
  description: string;
};

function Experience() {
  const { isDarkTheme } = useContext(ThemeContext);

  const arcOptions: ArcOptions[] = [
    { color: "#468FAF", size: "sm", strokeWidth: 10, animation: false },
    {
      color: isDarkTheme ? "#A9D6E5" : "#2C7DA0",
      size: "md",
      strokeWidth: 2,
      animation: true,
      strokeDasharray: "2,10"
    },
    {
      color: "#013A63",
      size: "lg",
      strokeWidth: 2,
      animation: false,
      strokeDasharray: "5,5",
      animationReverse: true,
      content: [
        {
          year: 2021,
          title: "Frontend Developer",
          description: "Angular14, RxJS, Typescript, PrimeNG, KendoUI, \n D3.js, Bootstrap, RWD, SCSS"
        },
        {
          year: 2019,
          title: "Junior Frontend Developer",
          description: "React, Typescript, MaterialUI, RWD, SCSS"
        },
        {
          year: 2019,
          title: "Frontend Developer - Intern",
          description: "Angular2, Typescript, ES6, D3.js, RWD, SCSS"
        },
        {
          year: 2018,
          title: "Graphic Designer",
          description: "Adobe Photoshop, InkScape"
        }
      ]
    }
  ];

  return (
    <div className="w-full h-[500px] relative mt-40">
      {arcOptions.map((options, index) => (
        <Arc key={index} options={options} />
      ))}
    </div>
  );
}

export default Experience;
