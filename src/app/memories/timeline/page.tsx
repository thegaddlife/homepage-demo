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
          {/* Left-aligned timeline line */}
          <div className="absolute left-4 h-full w-0.5 bg-gray-300"></div>

          {/* Timeline items */}
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 transform rounded-full bg-gray-800"></div>

                {/* Horizontal line from dot to date bubble center */}
                <div className="absolute left-4 top-6 z-0 h-0.5 w-16 bg-gray-300 translate-y-1.5"></div>

                {/* Content area */}
                <div className="ml-12 space-y-4">
                  {/* Date bubble - aligned with dot */}
                  <div className="relative z-10 inline-block rounded-full bg-white px-6 py-3 shadow-sm">
                    <span className="text-sm font-medium tracking-wide text-gray-600 uppercase">
                      {item.date}
                    </span>
                  </div>

                  {/* Combined avatar and name bubble */}
                  <div className="flex items-center rounded-full bg-white px-4 py-3 shadow-sm">
                    <div className="mr-3 flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-300">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-6 w-6 rounded-full bg-gray-400"></div>
                      )}
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-800">
                        {item.name}
                      </span>
                      <span className="ml-1 text-sm font-normal text-gray-600 italic">
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
    </div>
  );
}
