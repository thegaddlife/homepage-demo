import Image from "next/image";

export default function TimelinePage() {
  const timelineData = [
    {
      name: "Elizabeth Collins",
      action: "was born",
      date: "SEPTEMBER 9, 1879",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=256&h=256&fit=crop&crop=face",
      side: "left",
    },
    {
      name: "Mark Lewis",
      action: "was born",
      date: "JANUARY 28, 1886",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&fit=crop&crop=face",
      side: "right",
    },
    {
      name: "Elizabeth Collins",
      action: "has died",
      date: "APRIL 15, 1907",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=256&h=256&fit=crop&crop=face",
      side: "left",
    },
    {
      name: "Steven Lewis",
      action: "was born",
      date: "APRIL 5, 1908",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256&h=256&fit=crop&crop=face",
      side: "right",
    },
    {
      name: "Barbara Lewis",
      action: "was born",
      date: "SEPTEMBER 17, 1912",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
      side: "left",
    },
    {
      name: "John Lewis",
      action: "was born",
      date: "JANUARY 18, 1915",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&fit=crop&crop=face",
      side: "right",
    },
    {
      name: "Michelle Lewis",
      action: "was born",
      date: "AUGUST 25, 1918",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=256&h=256&fit=crop&crop=face",
      side: "left",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-0.5 transform bg-gray-300"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex items-center">
                {/* Timeline dot */}
                <div className="absolute left-1/2 z-10 h-3 w-3 -translate-x-1/2 transform rounded-full bg-gray-800"></div>

                {item.side === "left" ? (
                  // Left side layout
                  <>
                    <div className="flex w-1/2 justify-end pr-8">
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="inline-block rounded-full bg-white px-6 py-3 shadow-sm">
                            <span className="font-medium text-gray-800">
                              {item.name}
                            </span>
                            <span className="ml-1 font-normal text-gray-600 italic">
                              {item.action}
                            </span>
                          </div>
                        </div>
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-300">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-8 w-8 rounded-full bg-gray-400"></div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="inline-block rounded-full bg-white px-6 py-3 shadow-sm">
                        <span className="text-sm font-medium tracking-wide text-gray-600 uppercase">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  // Right side layout
                  <>
                    <div className="flex w-1/2 justify-end pr-8">
                      <div className="inline-block rounded-full bg-white px-6 py-3 shadow-sm">
                        <span className="text-sm font-medium tracking-wide text-gray-600 uppercase">
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <div className="w-1/2 pl-8">
                      <div className="flex items-center space-x-4">
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-300">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-8 w-8 rounded-full bg-gray-400"></div>
                          )}
                        </div>
                        <div>
                          <div className="inline-block rounded-full bg-white px-6 py-3 shadow-sm">
                            <span className="font-medium text-gray-800">
                              {item.name}
                            </span>
                            <span className="ml-1 font-normal text-gray-600 italic">
                              {item.action}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
