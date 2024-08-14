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
  const arcOptions: ArcOptions[] = [
    { color: "#468FAF", size: "sm", strokeWidth: 10, animation: false },
    {
      color: "#A9D6E5",
      size: "md",
      strokeWidth: 2,
      animation: true,
      strokeDasharray: "2,10",
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
          year: 2020,
          title: "Frontend Developer",
          description: "I started my journey as a frontend developer",
        },
        {
          year: 2018,
          title: "Frontend Developer",
          description: "I started my journey as a frontend developer",
        },
        {
          year: 2018,
          title: "Frontend Developer",
          description: "I started my journey as a frontend developer",
        },
        {
          year: 2018,
          title: "Frontend Developer",
          description: "I started my journey as a frontend developer",
        },
      ],
    },
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
