"use client";

import Image from "next/image";

export const FamilyTimeline = () => {
  const timelineData = [
    {
      name: "Elizabeth Collins",
      action: "was born",
      date: "September 9, 1879",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=256&h=256&fit=crop&crop=face",
      side: "left",
    },
    {
      name: "Mark Lewis",
      action: "was born",
      date: "January 28, 1886",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&fit=crop&crop=face",
      side: "right",
    },
    {
      name: "Elizabeth Collins",
      action: "has died",
      date: "April 15, 1907",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=256&h=256&fit=crop&crop=face",
      side: "left",
    },
    {
      name: "Steven Lewis",
      action: "was born",
      date: "April 5, 1908",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256&h=256&fit=crop&crop=face",
      side: "right",
    },
    {
      name: "Barbara Lewis",
      action: "was born",
      date: "September 17, 1912",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
      side: "left",
    },
    {
      name: "John Lewis",
      action: "was born",
      date: "January 18, 1915",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&fit=crop&crop=face",
      side: "right",
    },
    {
      name: "Michelle Lewis",
      action: "was born",
      date: "August 25, 1918",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=256&h=256&fit=crop&crop=face",
      side: "left",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative">
        {/* Left-aligned timeline line */}
        <div className="absolute left-4 h-full w-0.5 bg-gray-600"></div>

        {/* Timeline items */}
        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex items-start">
              {/* Timeline dot */}
              <div className="absolute top-6 left-4 z-10 h-3 w-3 -translate-x-1/2 transform rounded-full bg-gray-300"></div>

              {/* Horizontal line from dot to date bubble center */}
              <div className="absolute top-6 left-4 z-0 h-0.5 w-16 translate-y-1.5 bg-gray-600"></div>

              {/* Content area */}
              <div className="ml-12 space-y-4">
                {/* Date bubble - no background, smaller text, light border */}
                <div className="relative z-10 mt-2 inline-block rounded-full border border-gray-400 bg-neutral-800 px-4 py-2">
                  <span className="text-xs font-medium tracking-wide text-gray-300">
                    {item.date}
                  </span>
                </div>

                {/* Combined avatar and name bubble - dark background */}
                <div className="relative flex items-center rounded-full border border-gray-700 bg-sky-950 py-3 pr-4 pl-18 shadow-lg">
                  <div className="absolute top-1/2 left-0 h-16 w-16 -translate-y-1/2 overflow-hidden rounded-full border-3 border-sky-950 bg-gray-600">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full rounded-full bg-gray-500"></div>
                    )}
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-100">
                      {item.name}
                    </span>
                    <span className="ml-1 text-sm font-normal text-gray-300 italic">
                      {item.action}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
