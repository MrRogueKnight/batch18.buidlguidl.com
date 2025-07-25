"use client";

import { useEffect, useMemo, useState } from "react";
import { Address } from "~~/components/scaffold-eth";

export type Builder = {
  id: string;
  address: string;
  position: { x: number; y: number };
  size: "large" | "small";
};

type ConstellationProps = {
  builders: Builder[];
};

const connections = [
  { from: "v1", to: "v11" },
  { from: "v11", to: "v9" },
  { from: "v9", to: "v8" },
  { from: "v10", to: "v2" },
  { from: "v2", to: "v4" },
  { from: "v4", to: "v6" },
  { from: "v6", to: "v7" },
  { from: "v7", to: "v8" },
  { from: "v10", to: "v12" },
  { from: "v4", to: "v12" },
  { from: "v7", to: "v12" },
  { from: "v9", to: "v12" },
  { from: "v3", to: "v4" },
];

type BuilderPointProps = {
  isLarge: boolean;
  delay: string;
};

const BuilderPoint = ({ isLarge, delay }: BuilderPointProps) => (
  <div
    className={`absolute -translate-x-1/2 -translate-y-1/2 ${isLarge ? "w-8 h-8" : "w-5 h-5"}`}
    style={{
      animationName: "pulse",
      animationDuration: `${isLarge ? 4 : 6}s`,
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
      animationDelay: delay,
    }}
  >
    <div
      className="w-full h-full rounded-full"
      style={{
        border: `${isLarge ? "3px" : "2px"} solid #6DD5FA`,
        boxShadow: `0 0 ${isLarge ? "25px" : "15px"} #6DD5FA`,
      }}
    />
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full"
      style={{
        width: isLarge ? "10px" : "6px",
        height: isLarge ? "10px" : "6px",
        border: "1px solid rgba(109, 213, 250, 0.5)",
      }}
    />
  </div>
);

type BuilderLabelProps = {
  address?: string;
  isRightEdge: boolean;
};

const BuilderLabel = ({ address, isRightEdge }: BuilderLabelProps) => (
  <div
    className={`absolute top-1/2 -translate-y-1/2 flex items-center w-max p-2
      bg-white/70 dark:bg-black/60 backdrop-blur-md rounded-full text-center pointer-events-none
      ${isRightEdge ? "right-full mr-6" : "left-full ml-6"}`}
  >
    {address ? <Address address={address} /> : <p className="font-bold text-white text-sm px-2">Waiting...</p>}
  </div>
);

const Constellation = ({ builders }: ConstellationProps) => {
  const [animationDelays, setAnimationDelays] = useState<Record<string, string>>({});

  const builderMap = useMemo(() => Object.fromEntries(builders.map(b => [b.id, b])), [builders]);

  useEffect(() => {
    const delays: Record<string, string> = {};
    builders.forEach(b => {
      delays[b.id] = `${(Math.random() * 5).toFixed(1)}s`;
    });
    setAnimationDelays(delays);
  }, [builders]);

  return (
    <div className="relative w-full h-full">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2A5A8A" stopOpacity="0" />
            <stop offset="50%" stopColor="#6DD5FA" stopOpacity="1" />
            <stop offset="100%" stopColor="#2A5A8A" stopOpacity="0" />
          </linearGradient>
        </defs>
        {connections.map((conn, idx) => {
          const fromBuilder = builderMap[conn.from];
          const toBuilder = builderMap[conn.to];

          if (!fromBuilder || !toBuilder) {
            return null;
          }

          return (
            <line
              key={idx}
              x1={`${fromBuilder.position.x}%`}
              y1={`${fromBuilder.position.y}%`}
              x2={`${toBuilder.position.x}%`}
              y2={`${toBuilder.position.y}%`}
              stroke="url(#line-gradient)"
              strokeWidth="2.5"
              className="opacity-90"
            />
          );
        })}
      </svg>

      {builders.map(({ id, position, size, address }) => {
        const isLarge = size === "large";
        const delay = animationDelays[id] || "0s";
        const isRightEdge = position.x > 75;

        return (
          <div key={id} className="absolute" style={{ left: `${position.x}%`, top: `${position.y}%` }}>
            <BuilderPoint isLarge={isLarge} delay={delay} />
            <BuilderLabel address={address} isRightEdge={isRightEdge} />
          </div>
        );
      })}
    </div>
  );
};

export default Constellation;
