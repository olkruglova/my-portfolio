import React, { useContext, useEffect, useRef, useState } from "react";
import { ArcOptions, Content } from "./Experience";
import { ThemeContext } from "../providers/ThemeContext";

function Arc({ options }: { options: ArcOptions }) {
  const { isDarkTheme } = useContext(ThemeContext);

  const { color, size, animation, strokeWidth, strokeDasharray, animationReverse, content } = options;
  const pathRef = useRef<SVGPathElement>(null);
  const [circlePositions, setCirclePositions] = useState<{ cx: number; cy: number; content?: Content }[]>([]);

  const path: { [key: string]: string } = {
    sm: "M 0 160 A 75 75 0 0 1 0 370",
    md: "M 0 140 A 75 75 0 0 1 0 390",
    lg: "M 0 100 A 75 75 0 0 1 0 430"
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
        const point = pathElement.getPointAtLength(startLength + ((endLength - startLength) * i) / (numCircles - 1));
        positions.push({ cx: point.x, cy: point.y, content: content?.[i] });
      }

      setCirclePositions(positions);
    }
  }, [size, content]);

  const angles = [-45, -10, 10, 45];
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

        {size === "sm" ? (
          <text
            x="-267"
            y="10"
            fill={isDarkTheme ? "white" : "#000d17"}
            textAnchor="middle"
            alignmentBaseline="middle"
            className="text-lg"
            style={{ transform: "rotate(-90deg)" }}
          >
            Experience
          </text>
        ) : null}

        <defs>
          <filter id="drop-shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="0" dy="0" result="offsetblur" />
            <feFlood floodColor={isDarkTheme ? "#A9D6E5" : "#61A5C2"} />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {circlePositions.map((item, index) => {
          const angleRad = (angles[index] * Math.PI) / 180;
          const x2 = item.cx + length * Math.cos(angleRad);
          const y2 = item.cy + length * Math.sin(angleRad);
          const circleX = x2 + circleRadius * Math.cos(angleRad);
          const circleY = y2 + circleRadius * Math.sin(angleRad);
          const height = index === 0 ? rectHeight + 10 : rectHeight;
          const rectX = circleX + circleRadius * 2 * Math.cos(angleRad);
          const rectY = circleY - height / 2;
          const hovered = hoveredIndex === index;
          const strokeColor = isDarkTheme ? (hovered ? "#A9D6E5" : "#61A5C2") : hovered ? "#000d17" : "#012A4A";

          const hitAreaPadding = 10;
          const hitAreaX = Math.min(item.cx, rectX) - hitAreaPadding;
          const hitAreaY = Math.min(item.cy, rectY) - hitAreaPadding;
          const hitAreaWidth = Math.max(rectX + rectWidth, circleX + circleRadius) - hitAreaX + hitAreaPadding;
          const hitAreaHeight = Math.max(rectY + height, circleY + circleRadius) - hitAreaY + hitAreaPadding;

          return (
            <g
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out"
              }}
              transform={`scale(${hovered ? 1.1 : 1})`}
              transform-origin={`${item.cx}px ${item.cy}px`}
            >
              <rect x={hitAreaX} y={hitAreaY} width={hitAreaWidth} height={hitAreaHeight} fill="transparent" />

              <line
                x1={item.cx}
                y1={item.cy}
                x2={x2}
                y2={y2}
                strokeWidth="1"
                stroke={strokeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter={hovered ? "url(#drop-shadow)" : "none"}
              />
              <circle
                cx={item.cx}
                cy={item.cy}
                r="4"
                strokeWidth="1"
                stroke={strokeColor}
                fill="#012A4A"
                filter={hovered ? "url(#drop-shadow)" : "none"}
              />
              <circle
                cx={circleX}
                cy={circleY}
                r={circleRadius}
                strokeWidth="1"
                stroke={strokeColor}
                fill="#012A4A"
                filter={hovered ? "url(#drop-shadow)" : "none"}
              />
              <text
                x={circleX}
                y={circleY}
                fill="#A9D6E5"
                textAnchor="middle"
                alignmentBaseline="middle"
                className={`text-lg ${hovered ? "font-bold" : null}`}
              >
                {item.content?.year}
              </text>
              <rect
                x={rectX}
                y={rectY}
                width={rectWidth}
                height={height}
                rx={rectRadius}
                ry={rectRadius}
                fill="transparent"
                stroke={strokeColor}
                strokeWidth="0.5"
                filter={hovered ? "url(#drop-shadow)" : "none"}
              />
              <text
                x={rectX + rectWidth / 2}
                y={rectY + 25}
                fill={strokeColor}
                fontWeight="bold"
                textAnchor="middle"
                className="text-lg"
              >
                {item.content?.title}
              </text>
              <text
                x={rectX + rectWidth / 2}
                y={rectY + 55}
                fill={strokeColor}
                textAnchor="middle"
                className="text-base"
              >
                {item.content?.description.split("\n").map((line, index) => (
                  <tspan x={rectX + rectWidth / 2} dy={index === 0 ? "0em" : "1.2em"} key={index}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default Arc;
