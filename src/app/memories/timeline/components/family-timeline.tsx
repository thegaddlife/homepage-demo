"use client";

import Image from "next/image";
import { timelineData, type EventType } from "../timeline-data";

const getEventTypeStyles = (eventType: EventType) => {
  switch (eventType) {
    case 'birth':
      return {
        dotColor: 'bg-green-400',
        cardColor: 'bg-green-950 border-green-700',
        dateColor: 'bg-green-800 border-green-600'
      };
    case 'death':
      return {
        dotColor: 'bg-red-400',
        cardColor: 'bg-red-950 border-red-700',
        dateColor: 'bg-red-800 border-red-600'
      };
    case 'marriage':
      return {
        dotColor: 'bg-pink-400',
        cardColor: 'bg-pink-950 border-pink-700',
        dateColor: 'bg-pink-800 border-pink-600'
      };
    case 'anniversary':
      return {
        dotColor: 'bg-purple-400',
        cardColor: 'bg-purple-950 border-purple-700',
        dateColor: 'bg-purple-800 border-purple-600'
      };
    case 'miscellaneous':
    default:
      return {
        dotColor: 'bg-blue-400',
        cardColor: 'bg-blue-950 border-blue-700',
        dateColor: 'bg-blue-800 border-blue-600'
      };
  }
};

export const FamilyTimeline = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="relative">
        {/* Mobile: Left-aligned timeline line, Desktop: Center-aligned timeline line */}
        <div className="absolute left-4 h-full w-0.5 bg-gray-600 md:left-1/2 md:-translate-x-1/2"></div>

        {/* Timeline items */}
        <div className="space-y-8">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const styles = getEventTypeStyles(item.eventType);

            return (
              <div key={index} className="relative">
                {/* Timeline dot - Mobile: left-aligned, Desktop: center */}
                <div className={`absolute top-6 left-4 z-10 h-3 w-3 transform rounded-full ${styles.dotColor} md:left-1/2 md:-translate-x-1/2`}></div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  {/* Horizontal line from dot to content */}
                  <div className="absolute top-6 left-4 z-0 h-0.5 w-16 translate-y-1.5 bg-gray-600"></div>

                  <div className="ml-12 space-y-4">
                    {/* Date bubble */}
                    <div className={`relative z-10 mt-2 inline-block rounded-full border ${styles.dateColor} px-4 py-2`}>
                      <span className="text-xs font-medium tracking-wide text-gray-100">
                        {item.date}
                      </span>
                    </div>

                    {/* Avatar and name bubble */}
                    <div className={`relative flex w-fit items-center rounded-full border ${styles.cardColor} py-3 ${item.eventType === 'marriage' && item.secondaryPerson ? 'pr-18 pl-18' : 'pr-4 pl-18'} shadow-lg`}>
                      {/* Primary person image */}
                      <div className={`absolute top-1/2 left-0 h-16 w-16 -translate-y-1/2 overflow-hidden rounded-full border-3 ${styles.cardColor.split(' ')[0]} bg-gray-600`}>
                        {item.primaryPerson.image ? (
                          <Image
                            src={item.primaryPerson.image}
                            alt={item.primaryPerson.name}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="h-full w-full rounded-full bg-gray-500"></div>
                        )}
                      </div>
                      
                      {/* Secondary person image for marriages */}
                      {item.eventType === 'marriage' && item.secondaryPerson && (
                        <div className={`absolute top-1/2 right-0 h-16 w-16 -translate-y-1/2 overflow-hidden rounded-full border-3 ${styles.cardColor.split(' ')[0]} bg-gray-600`}>
                          {item.secondaryPerson.image ? (
                            <Image
                              src={item.secondaryPerson.image}
                              alt={item.secondaryPerson.name}
                              width={64}
                              height={64}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-full w-full rounded-full bg-gray-500"></div>
                          )}
                        </div>
                      )}
                      
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-100">
                            {item.primaryPerson.name}
                          </span>
                          {item.secondaryPerson && (
                            <>
                              <span className="mx-1 text-sm font-normal text-gray-300"> & </span>
                              <span className="text-sm font-medium text-gray-100">
                                {item.secondaryPerson.name}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm font-normal text-gray-300 italic">
                            {item.action}
                          </span>
                          {item.description && (
                            <span className="ml-2 text-xs text-gray-400">
                              ({item.description})
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                  <div className="flex items-start justify-center">
                    {/* Left side content */}
                    <div className={`w-1/2 ${isLeft ? "pr-8" : "pr-16"}`}>
                      {isLeft && (
                        <div className="flex flex-col items-end space-y-4">
                          {/* Date bubble on left */}
                          <div className={`relative z-10 mt-2 inline-block rounded-full border ${styles.dateColor} px-4 py-2 md:px-5 md:py-3`}>
                            <span className="text-xs font-medium tracking-wide text-gray-100 md:text-sm">
                              {item.date}
                            </span>
                          </div>

                          {/* Horizontal line extending left from center */}
                          <div className="absolute top-6 left-1/2 z-0 h-0.5 w-16 -translate-x-full translate-y-1.5 bg-gray-600"></div>
                        </div>
                      )}
                    </div>

                    {/* Right side content */}
                    <div className={`w-1/2 ${isLeft ? "pl-8" : "pl-8"}`}>
                      {isLeft ? (
                        /* Avatar on right when date is on left */
                        <div className={`relative mt-2 flex w-fit items-center rounded-full border ${styles.cardColor} py-3 ${item.eventType === 'marriage' && item.secondaryPerson ? 'pr-24 pl-24' : 'pr-4 pl-18'} shadow-lg md:py-4 ${item.eventType === 'marriage' && item.secondaryPerson ? 'md:pr-28 md:pl-28' : 'md:pr-5 md:pl-24'}`}>
                          {/* Primary person image */}
                          <div className={`absolute top-1/2 left-0 h-16 w-16 -translate-y-1/2 overflow-hidden rounded-full border-3 ${styles.cardColor.split(' ')[0]} bg-gray-600 md:h-20 md:w-20`}>
                            {item.primaryPerson.image ? (
                              <Image
                                src={item.primaryPerson.image}
                                alt={item.primaryPerson.name}
                                width={64}
                                height={64}
                                className="h-full w-full object-cover md:h-20 md:w-20"
                              />
                            ) : (
                              <div className="h-full w-full rounded-full bg-gray-500"></div>
                            )}
                          </div>
                          
                          {/* Secondary person image for marriages */}
                          {item.eventType === 'marriage' && item.secondaryPerson && (
                            <div className={`absolute top-1/2 right-0 h-16 w-16 -translate-y-1/2 overflow-hidden rounded-full border-3 ${styles.cardColor.split(' ')[0]} bg-gray-600 md:h-20 md:w-20`}>
                              {item.secondaryPerson.image ? (
                                <Image
                                  src={item.secondaryPerson.image}
                                  alt={item.secondaryPerson.name}
                                  width={64}
                                  height={64}
                                  className="h-full w-full object-cover md:h-20 md:w-20"
                                />
                              ) : (
                                <div className="h-full w-full rounded-full bg-gray-500"></div>
                              )}
                            </div>
                          )}
                          
                          <div className="flex flex-col">
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-gray-100 md:text-base">
                                {item.primaryPerson.name}
                              </span>
                              {item.secondaryPerson && (
                                <>
                                  <span className="mx-1 text-sm font-normal text-gray-300 md:text-base"> & </span>
                                  <span className="text-sm font-medium text-gray-100 md:text-base">
                                    {item.secondaryPerson.name}
                                  </span>
                                </>
                              )}
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm font-normal text-gray-300 italic md:text-base">
                                {item.action}
                              </span>
                              {item.description && (
                                <span className="ml-2 text-xs text-gray-400 md:text-sm">
                                  ({item.description})
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Date on right when avatar is on left */
                        <div className="flex flex-col items-start space-y-4">
                          <div className={`relative z-10 mt-2 inline-block rounded-full border ${styles.dateColor} px-4 py-2 md:px-5 md:py-3`}>
                            <span className="text-xs font-medium tracking-wide text-gray-100 md:text-sm">
                              {item.date}
                            </span>
                          </div>

                          {/* Horizontal line extending right from center */}
                          <div className="absolute top-6 left-1/2 z-0 h-0.5 w-16 translate-y-1.5 bg-gray-600"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Avatar on left side for right-aligned items */}
                  {!isLeft && (
                    <div className="absolute top-2 left-0 w-1/2 pr-8">
                      <div className="flex justify-end">
                        <div className={`relative flex items-center rounded-full border ${styles.cardColor} py-3 ${item.eventType === 'marriage' && item.secondaryPerson ? 'pr-24 pl-24' : 'pr-18 pl-4'} shadow-lg md:py-4 ${item.eventType === 'marriage' && item.secondaryPerson ? 'md:pr-28 md:pl-28' : 'md:pr-24 md:pl-5'}`}>
                          {/* Secondary person image for marriages (left side) */}
                          {item.eventType === 'marriage' && item.secondaryPerson && (
                            <div className={`absolute top-1/2 left-0 h-16 w-16 -translate-y-1/2 overflow-hidden rounded-full border-3 ${styles.cardColor.split(' ')[0]} bg-gray-600 md:h-20 md:w-20`}>
                              {item.secondaryPerson.image ? (
                                <Image
                                  src={item.secondaryPerson.image}
                                  alt={item.secondaryPerson.name}
                                  width={64}
                                  height={64}
                                  className="h-full w-full object-cover md:h-20 md:w-20"
                                />
                              ) : (
                                <div className="h-full w-full rounded-full bg-gray-500"></div>
                              )}
                            </div>
                          )}
                          
                          <div className="flex flex-col">
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-gray-100 md:text-base">
                                {item.primaryPerson.name}
                              </span>
                              {item.secondaryPerson && (
                                <>
                                  <span className="mx-1 text-sm font-normal text-gray-300 md:text-base"> & </span>
                                  <span className="text-sm font-medium text-gray-100 md:text-base">
                                    {item.secondaryPerson.name}
                                  </span>
                                </>
                              )}
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm font-normal text-gray-300 italic md:text-base">
                                {item.action}
                              </span>
                              {item.description && (
                                <span className="ml-2 text-xs text-gray-400 md:text-sm">
                                  ({item.description})
                                </span>
                              )}
                            </div>
                          </div>
                          
                          {/* Primary person image (right side) */}
                          <div className={`absolute top-1/2 right-0 h-16 w-16 -translate-y-1/2 overflow-hidden rounded-full border-3 ${styles.cardColor.split(' ')[0]} bg-gray-600 md:h-20 md:w-20`}>
                            {item.primaryPerson.image ? (
                              <Image
                                src={item.primaryPerson.image}
                                alt={item.primaryPerson.name}
                                width={64}
                                height={64}
                                className="h-full w-full object-cover md:h-20 md:w-20"
                              />
                            ) : (
                              <div className="h-full w-full rounded-full bg-gray-500"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
