import React from "react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    date: "Apr, 2017",
    title: "Datatang - Data Engineer(Intern)",
    description:
      "Wrote Python scripts to build web crawlers for data collection, cleaning, and integration tasks across multiple sources.",
  },
  {
    date: "Aug, 2017",
    title: "daotech.io - Backend Engineer",
    description:
      "Built a business platform based on Hyperledger Fabric and Node.js, including RESTful APIs, business logic, and deployment services.",
  },
  {
    date: "Sep, 2019",
    title: "Advokate -  Backend Engineer(SmartContract)",
    description:
      "Developed backend services and Solidity smart contracts for a decentralized NFT marketplace supporting primary and secondary sales.",
  },
  {
    date: "Apr, 2022",
    title: "iHealth - Backend Lead",
    description:
      "Led the redesign and optimization of backend architecture, improving system performance and reducing cloud costs",
  },
];

export const Timeline = () => {
  const itemCount = timelineData.length;
  const minTimelineWidth = Math.max(itemCount * 300, 1200);
  const axisY = 280; // 时间轴 Y 坐标

  return (
    <div className="w-full overflow-x-auto pb-24">
      <div
        className="relative mx-auto px-8"
        style={{ width: `${minTimelineWidth}px`, height: "500px" }}
      >
        {/* 中线 */}
        <div
          className="absolute left-0 right-0 h-1 bg-gray-300 z-0"
          style={{ top: `${axisY}px` }}
        />

        <div className="flex justify-between w-full relative z-10">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            const cardOffset = 100;
            const dotSize = 24;

            return (
              <div
                key={index}
                className="relative flex flex-col items-center"
                style={{ width: `${100 / itemCount}%` }}
              >
                {/* 时间点 */}
                <div
                  className="absolute w-6 h-6 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center"
                  style={{
                    top: axisY - dotSize / 2,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 20,
                  }}
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                </div>

                {/* 时间戳 */}
                <div
                  className="absolute text-sm text-gray-500 font-medium"
                  style={{
                    top: isEven ? axisY - 40 : axisY + 20,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  {item.date}
                </div>

                {/* 垂直连接线 */}
                <div
                  className="absolute w-0.5 bg-gray-200"
                  style={{
                    height: "40px",
                    top: isEven
                      ? axisY + dotSize / 2
                      : axisY - 40 - dotSize / 2,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />

                {/* 卡片 */}
                <div
                  className="absolute bg-white p-5 rounded-lg shadow-md border border-gray-100 max-w-xs min-w-[220px] text-center"
                  style={{
                    top: isEven
                      ? axisY + cardOffset - 50
                      : axisY - cardOffset - 180,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
