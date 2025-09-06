"use client";

import Image from "next/image";
import { type EventType, timelineData, type TimelineItem } from "../timeline-data";

interface EventStyles {
  dotColor: string;
  cardColor: string;
  dateColor: string;
}

const getEventTypeStyles = (
  eventType: EventType,
  primaryPersonName?: string,
  secondaryPersonName?: string
): EventStyles => {
  // Check if Eugene Gadd or Eugene Wilfred Gadd is involved
  const isEugeneGaddEvent =
    primaryPersonName === "Eugene Gadd" ||
    secondaryPersonName === "Eugene Gadd" ||
    primaryPersonName === "Eugene Wilfred Gadd" ||
    secondaryPersonName === "Eugene Wilfred Gadd";

  if (isEugeneGaddEvent) {
    return {
      dotColor: "bg-blue-700",
      cardColor: "bg-blue-950 border-blue-800",
      dateColor: "bg-neutral-800 border-gray-400",
    };
  }

  switch (eventType) {
    case "birth":
      return {
        dotColor: "bg-emerald-600",
        cardColor: "bg-neutral-800 border-emerald-800",
        dateColor: "bg-neutral-800 border-gray-400",
      };
    case "death":
      return {
        dotColor: "bg-rose-600",
        cardColor: "bg-neutral-800 border-rose-800",
        dateColor: "bg-neutral-800 border-gray-400",
      };
    case "marriage":
      return {
        dotColor: "bg-violet-600",
        cardColor: "bg-neutral-800 border-violet-800",
        dateColor: "bg-neutral-800 border-gray-400",
      };
    case "miscellaneous":
    default:
      return {
        dotColor: "bg-teal-600",
        cardColor: "bg-neutral-800 border-teal-800",
        dateColor: "bg-neutral-800 border-gray-400",
      };
  }
};

// Helper Components
const TimelineDot = ({ item, styles }: { item: TimelineItem; styles: EventStyles }) => (
  <div
    className={`absolute top-6 left-4 z-10 h-3 w-3 transform rounded-full ${styles.dotColor} ${
      item.eventType === "on this day" ? "md:hidden" : "md:left-1/2 md:-translate-x-1/2"
    }`}
  />
);

const DateBubble = ({ date, styles, className = "" }: { date: string; styles: EventStyles; className?: string }) => (
  <div className={`relative z-10 mt-2 inline-block rounded-full border ${styles.dateColor} px-4 py-2 md:px-5 md:py-3 ${className}`}>
    <span className="text-xs font-medium tracking-wide text-gray-100 md:text-sm">{date}</span>
  </div>
);

const PersonAvatar = ({ person, styles, size = "md" }: { person: { name: string; image: string }; styles: EventStyles; size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-16 w-16 md:h-20 md:w-20", 
    lg: "h-20 w-20"
  };
  
  return (
    <div className={`overflow-hidden rounded-full border-3 ${styles.cardColor.split(" ")[0]} bg-gray-600 ${sizeClasses[size]}`}>
      {person.image ? (
        <Image
          src={person.image}
          alt={person.name}
          width={size === "lg" ? 80 : 64}
          height={size === "lg" ? 80 : 64}
          className={`h-full w-full object-cover ${size === "md" ? "md:h-20 md:w-20" : ""}`}
        />
      ) : (
        <div className="h-full w-full rounded-full bg-gray-500" />
      )}
    </div>
  );
};

const OnThisDayEvent = ({ item, styles }: { item: TimelineItem; styles: EventStyles }) => (
  <div className="w-full md:pt-14 md:pb-8">
    {/* Mobile */}
    <div className="md:hidden">
      <div className="absolute top-6 left-4 z-0 h-0.5 w-16 translate-y-1.5 bg-gray-600" />
      <div className="ml-12 space-y-4">
        <DateBubble date={item.date} styles={styles} />
        <div className="flex w-fit items-center space-x-3 rounded-lg border border-gray-600 bg-neutral-800 p-1 pr-4 shadow-lg">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.description || "Event image"}
              width={168}
              height={168}
              className="h-14 w-14 flex-shrink-0 rounded object-cover"
            />
          ) : (
            <div className="h-8 w-8 flex-shrink-0 rounded bg-gray-500" />
          )}
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-100">{item.description}</span>
          </div>
        </div>
      </div>
    </div>

    {/* Desktop */}
    <div className="hidden md:block">
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl">
          <div className="relative z-20 mx-8 flex items-center justify-center rounded-lg border border-gray-600 bg-neutral-800 py-1 shadow-lg">
            {item.image && (
              <Image
                src={item.image}
                alt={item.description || "Event image"}
                width={240}
                height={240}
                className="absolute left-0 h-32 w-32 rounded-full border-3 border-neutral-400 object-cover"
              />
            )}
            <div className="flex flex-col">
              <span className="text-base font-medium">
                <span className="text-white">{item.description}</span>
                <span className="text-gray-200"> - {item.date}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const RegularTimelineEvent = ({ item, styles, isLeft }: { item: TimelineItem; styles: EventStyles; isLeft: boolean }) => {
  const isMarriage = item.eventType === "marriage" && item.secondaryPerson;
  
  return (
    <>
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="absolute top-6 left-4 z-0 h-0.5 w-16 translate-y-1.5 bg-gray-600" />
        <div className="ml-12 space-y-4">
          <DateBubble date={item.date} styles={styles} />
          <div className={`relative flex w-fit items-center rounded-full border ${styles.cardColor} py-3 ${isMarriage ? "pr-18 pl-18" : "pr-4 pl-18"} shadow-lg`}>
            {/* Primary person image */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2">
              <PersonAvatar person={item.primaryPerson!} styles={styles} />
            </div>
            
            {/* Secondary person image for marriages */}
            {isMarriage && (
              <div className="absolute top-1/2 right-0 -translate-y-1/2">
                <PersonAvatar person={item.secondaryPerson!} styles={styles} />
              </div>
            )}
            
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-100">{item.primaryPerson?.name}</span>
                {item.secondaryPerson && (
                  <>
                    <span className="mx-1 text-sm font-normal text-gray-300"> & </span>
                    <span className="text-sm font-medium text-gray-100">{item.secondaryPerson.name}</span>
                  </>
                )}
              </div>
              <div className="flex items-center">
                <span className="text-sm font-normal text-gray-300 italic">{item.action}</span>
                {item.description && (
                  <span className="ml-2 text-xs text-gray-400">({item.description})</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex items-start justify-center">
          {/* Left side */}
          <div className={`w-1/2 ${isLeft ? "pr-8" : "pr-16"}`}>
            {isLeft && (
              <div className="flex flex-col items-end space-y-4">
                <DateBubble date={item.date} styles={styles} />
                <div className="absolute top-6 left-1/2 z-0 h-0.5 w-16 -translate-x-full translate-y-1.5 bg-gray-600" />
              </div>
            )}
          </div>

          {/* Right side */}
          <div className="w-1/2 pl-8">
            {isLeft ? (
              /* Avatar on right when date is on left */
              <div className={`relative mt-2 flex w-fit items-center rounded-full border ${styles.cardColor} py-3 ${isMarriage ? "pr-24 pl-24 md:pr-28 md:pl-28" : "pr-4 pl-18 md:pr-5 md:pl-24"} shadow-lg md:py-4`}>
                <div className="absolute top-1/2 left-0 -translate-y-1/2">
                  <PersonAvatar person={item.primaryPerson!} styles={styles} />
                </div>
                {isMarriage && (
                  <div className="absolute top-1/2 right-0 -translate-y-1/2">
                    <PersonAvatar person={item.secondaryPerson!} styles={styles} />
                  </div>
                )}
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-100 md:text-base">{item.primaryPerson?.name}</span>
                    {item.secondaryPerson && (
                      <>
                        <span className="mx-1 text-sm font-normal text-gray-300 md:text-base"> & </span>
                        <span className="text-sm font-medium text-gray-100 md:text-base">{item.secondaryPerson.name}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-normal text-gray-300 italic md:text-base">{item.action}</span>
                    {item.description && (
                      <span className="ml-2 text-xs text-gray-400 md:text-sm">({item.description})</span>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* Date on right when avatar is on left */
              <div className="flex flex-col items-start space-y-4">
                <DateBubble date={item.date} styles={styles} />
                <div className="absolute top-6 left-1/2 z-0 h-0.5 w-16 translate-y-1.5 bg-gray-600" />
              </div>
            )}
          </div>
        </div>

        {/* Avatar on left side for right-aligned items */}
        {!isLeft && (
          <div className="absolute top-2 left-0 w-1/2 pr-8">
            <div className="flex justify-end">
              <div className={`relative flex items-center rounded-full border ${styles.cardColor} py-3 ${isMarriage ? "pr-24 pl-24 md:pr-28 md:pl-28" : "pr-18 pl-4 md:pr-24 md:pl-5"} shadow-lg md:py-4`}>
                {isMarriage && (
                  <div className="absolute top-1/2 left-0 -translate-y-1/2">
                    <PersonAvatar person={item.secondaryPerson!} styles={styles} />
                  </div>
                )}
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-100 md:text-base">{item.primaryPerson?.name}</span>
                    {item.secondaryPerson && (
                      <>
                        <span className="mx-1 text-sm font-normal text-gray-300 md:text-base"> & </span>
                        <span className="text-sm font-medium text-gray-100 md:text-base">{item.secondaryPerson.name}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-normal text-gray-300 italic md:text-base">{item.action}</span>
                    {item.description && (
                      <span className="ml-2 text-xs text-gray-400 md:text-sm">({item.description})</span>
                    )}
                  </div>
                </div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2">
                  <PersonAvatar person={item.primaryPerson!} styles={styles} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export const FamilyTimeline = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="relative">
        {/* Mobile: Left-aligned timeline line, Desktop: Center-aligned timeline line */}
        <div className="absolute left-5 h-full w-0.5 bg-gray-600 md:left-1/2 md:-translate-x-1/2"></div>

        {/* Timeline items */}
        <div className="space-y-8">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const styles = getEventTypeStyles(
              item.eventType,
              item.primaryPerson?.name,
              item.secondaryPerson?.name
            );

            return (
              <div key={index} className="relative">
                <TimelineDot item={item} styles={styles} />
                {item.eventType === "on this day" ? (
                  <OnThisDayEvent item={item} styles={styles} />
                ) : (
                  <RegularTimelineEvent item={item} styles={styles} isLeft={isLeft} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
