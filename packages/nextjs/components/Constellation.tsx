"use client";

import { useMemo } from "react";
import { generateConnections } from "../utils/scaffold-eth/graphUtils";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

export type ConstellationNode = {
  address: string;
  position: { x: number; y: number };
  size: "large" | "small";
};

const CONSTELLATION_LAYOUT = [
  { position: { x: 5, y: 15 }, size: "large" as const },
  { position: { x: 35, y: 5 }, size: "small" as const },
  { position: { x: 90, y: 25 }, size: "small" as const },
  { position: { x: 75, y: 50 }, size: "small" as const },
  { position: { x: 70, y: 75 }, size: "small" as const },
  { position: { x: 40, y: 55 }, size: "small" as const },
  { position: { x: 30, y: 85 }, size: "small" as const },
  { position: { x: 0, y: 75 }, size: "large" as const },
  { position: { x: 45, y: 30 }, size: "small" as const },
  { position: { x: 15, y: 40 }, size: "small" as const },
  { position: { x: 45, y: 65 }, size: "large" as const },
];

const CONTRACT_FROM_BLOCK: bigint = 355913556n;

const BuilderPoint = ({ isLarge, delay }: { isLarge: boolean; delay: string }) => {
  const sizeClass = isLarge ? "w-8 h-8" : "w-5 h-5";
  const borderClass = isLarge ? "border-[3px] shadow-[0_0_25px_#6DD5FA]" : "border-2 shadow-[0_0_15px_#6DD5FA]";
  const innerSizeClass = isLarge ? "w-[10px] h-[10px]" : "w-[6px] h-[6px]";

  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${sizeClass} animate-[pulse-scale_4s_ease-in-out_infinite]`}
      style={{ animationDelay: delay }}
    >
      <div className={`w-full h-full rounded-full border-[#6DD5FA] ${borderClass}`} />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full border border-[rgba(109,213,250,0.5)] ${innerSizeClass}`}
      />
    </div>
  );
};

const BuilderLabel = ({ address, isRightEdge }: { address?: string; isRightEdge: boolean }) =>
  address ? (
    <div
      className={`absolute top-1/2 -translate-y-1/2 flex items-center w-max p-2 text-center rounded-full pointer-events-none backdrop-blur-md
        bg-white/70 dark:bg-black/60
        ${isRightEdge ? "right-full mr-6" : "left-full ml-6"}`}
    >
      <Address address={address} />
    </div>
  ) : null;

const Constellation = () => {
  const { data: checkedInEvents, isLoading } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: CONTRACT_FROM_BLOCK,
    blocksBatchSize: 5000000,
  });

  const { nodes, connections } = useMemo(() => {
    if (!checkedInEvents) return { nodes: [], connections: [] };

    const uniqueEvents = checkedInEvents.filter(
      (event, idx, self) => idx === self.findIndex(e => e.args.builder === event.args.builder),
    );

    const nodes: ConstellationNode[] = CONSTELLATION_LAYOUT.map((layoutNode, idx) => {
      const event = uniqueEvents[idx];
      return {
        address: event?.args.builder ?? "",
        position: layoutNode.position,
        size: layoutNode.size,
      };
    });

    const connections = generateConnections(nodes, 35);
    return { nodes, connections };
  }, [checkedInEvents]);

  const animationDelays = useMemo(() => {
    const delays: Record<string, string> = {};
    nodes.forEach(node => {
      if (node.address) {
        delays[node.address] = `${(Math.random() * 5).toFixed(1)}s`;
      }
    });
    return delays;
  }, [nodes]);

  if (isLoading || !checkedInEvents) {
    return <p className="m-auto text-white">Loading Constellation...</p>;
  }

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
        {connections.map(({ from, to }, idx) => (
          <line
            key={idx}
            x1={`${nodes[from].position.x}%`}
            y1={`${nodes[from].position.y}%`}
            x2={`${nodes[to].position.x}%`}
            y2={`${nodes[to].position.y}%`}
            stroke="url(#line-gradient)"
            strokeWidth="2.5"
            className="opacity-90"
          />
        ))}
      </svg>

      {nodes.map(({ address, position, size }, index) => {
        if (!address) return null;

        const delay = animationDelays[address] || "0s";
        const isRightEdge = position.x > 75;

        return (
          <div key={address || index} className="absolute" style={{ left: `${position.x}%`, top: `${position.y}%` }}>
            <BuilderPoint isLarge={size === "large"} delay={delay} />
            <BuilderLabel address={address} isRightEdge={isRightEdge} />
          </div>
        );
      })}
    </div>
  );
};

export default Constellation;
