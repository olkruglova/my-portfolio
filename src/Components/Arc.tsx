import React, { useEffect, useRef, useState } from "react";
import { ArcOptions, Content } from "./Experience";

function Arc({ options }: { options: ArcOptions }) {
  const {
    color,
    size,
    animation,
    strokeWidth,
    strokeDasharray,
    animationReverse,
    content,
  } = options;
  const pathRef = useRef<SVGPathElement>(null);
  const [circlePositions, setCirclePositions] = useState<
    { cx: number; cy: number; content?: Content }[]
  >([]);

  const path: { [key: string]: string } = {
    sm: "M 0 160 A 75 75 0 0 1 0 370",
    md: "M 0 140 A 75 75 0 0 1 0 390",
    lg: "M 0 100 A 75 75 0 0 1 0 430",
  };

  useEffect(() => {
    const pathElement = pathRef.current;
    if (pathElement) {
      const pathLength = pathElement.getTotalLength();

      const startLength = pathLength * (45 / 360);
      const endLength = pathLength * (315 / 360);

      const numCircles = content?.length || 0;
      const positions = [];

      for (let i = 0; i < numCircles; i++) {
        const point = pathElement.getPointAtLength(
          startLength + ((endLength - startLength) * i) / (numCircles - 1)
        );
        positions.push({ cx: point.x, cy: point.y, content: content?.[i] });
      }

      setCirclePositions(positions);
    }
  }, [size, content]);

  const angles = [-45, -15, 15, 45];
  const length = 50;
  const circleRadius = 30;
  const rectWidth = 400;
  const rectHeight = 80;
  const rectRadius = 30;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="absolute top-0 left-0">
      <svg width="750" height="600" viewBox="0 0 750 600">
        <path
          ref={pathRef}
          d={path[size]}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth ? strokeWidth : 2}
          strokeDasharray={strokeDasharray ? strokeDasharray : "0,0"}
          strokeDashoffset="0"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {size === "sm" ? (
            <text
              x="20"
              y="180"
              fill="#A9D6E5"
              textAnchor="middle"
              alignmentBaseline="middle"
              className="text-lg"
            >
              Experience
            </text>
          ) : null}
          {animation ? (
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-12"
              dur="1.5s"
              calcMode="linear"
              repeatCount="indefinite"
            />
          ) : null}
          {animationReverse ? (
            <animate
              attributeName="stroke-dashoffset"
              from="-100"
              to="0"
              dur="3s"
              calcMode="linear"
              repeatCount="indefinite"
            />
          ) : null}
        </path>

        {circlePositions.map((item, index) => {
          const angleRad = (angles[index] * Math.PI) / 180;
          const x2 = item.cx + length * Math.cos(angleRad);
          const y2 = item.cy + length * Math.sin(angleRad);
          const circleX = x2 + circleRadius * Math.cos(angleRad);
          const circleY = y2 + circleRadius * Math.sin(angleRad);
          const rectX = circleX + circleRadius * 2 * Math.cos(angleRad);
          const rectY = circleY - rectHeight / 2;

          return (
            <g
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ cursor: "pointer" }}
              transform={`scale(${hoveredIndex === index ? 1.1 : 1})`}
              transform-origin={`${item.cx}px ${item.cy}px`} // Ensures scaling is done relative to the circle's center
            >
              <line
                x1={item.cx}
                y1={item.cy}
                x2={x2}
                y2={y2}
                strokeWidth={hoveredIndex === index ? "2" : "1"}
                stroke={hoveredIndex === index ? "#A9D6E5" : "white"}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle
                cx={item.cx}
                cy={item.cy}
                r="4"
                strokeWidth={hoveredIndex === index ? "2" : "1"}
                stroke={hoveredIndex === index ? "#A9D6E5" : "#61A5C2"}
                fill="#012A4A"
              />
              <circle
                cx={circleX}
                cy={circleY}
                r={circleRadius}
                strokeWidth={hoveredIndex === index ? "2" : "1"}
                stroke={hoveredIndex === index ? "#A9D6E5" : "#61A5C2"}
                fill="#012A4A"
              />
              <text
                x={circleX}
                y={circleY}
                fill="#A9D6E5"
                textAnchor="middle"
                alignmentBaseline="middle"
                className={`text-lg ${
                  hoveredIndex === index ? "font-bold " : null
                }`}
              >
                {item.content?.year}
              </text>

              <rect
                x={rectX}
                y={rectY}
                width={rectWidth}
                height={rectHeight}
                rx={rectRadius}
                ry={rectRadius}
                fill="transparent"
                stroke={hoveredIndex === index ? "#A9D6E5" : "#61A5C2"}
                strokeWidth={hoveredIndex === index ? "2" : "1"}
              />
              <text
                x={rectX + rectWidth / 2}
                y={rectY + 25}
                fill={hoveredIndex === index ? "#A9D6E5" : "#61A5C2"}
                fontWeight="bold"
                textAnchor="middle"
                className="text-lg"
              >
                {item.content?.title}
              </text>
              <text
                x={rectX + rectWidth / 2}
                y={rectY + 55}
                fill={hoveredIndex === index ? "#A9D6E5" : "#61A5C2"}
                textAnchor="middle"
                className="text-base"
              >
                {item.content?.description}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default Arc;
