export type EventType =
  | "birth"
  | "death"
  | "marriage"
  | "anniversary"
  | "miscellaneous";

export interface Person {
  name: string;
  image: string;
}

export interface TimelineItem {
  eventType: EventType;
  primaryPerson: Person;
  secondaryPerson?: Person;
  action: string;
  date: string;
  description?: string;
}

export const timelineData: TimelineItem[] = [
  {
    eventType: "birth",
    primaryPerson: {
      name: "Joseph Collins Gadd Sr.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "January 18, 1844",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "William Franklin Parker",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "March 18, 1844",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Lydia Anne (Allen) Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "January 17, 1846",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Nancy Jane Harris",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "December 10, 1847",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Benjamin Parker",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "August 23, 1857",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "James Franklin Betz",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "November 30, 1857",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Sarah Ella Parker",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "January 19, 1859",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "John J. Blanchard",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "February 10, 1859",
  },
  {
    eventType: "marriage",
    primaryPerson: {
      name: "Joseph Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    secondaryPerson: {
      name: "Lydia Allen",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "were married",
    date: "October 2, 1866",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Susan Tabithia Parker",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "March 11, 1869",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Harris Byron Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "March 28, 1883",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Maude Edna (Betz) Parker",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "February 24, 1884",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Flora Adelia (Blanchard) Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "September 21, 1887",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Harrold Donald Betz",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "January 26, 1892",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "Nancy Jane Harris",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "June 19, 1901",
    description: "age 53",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Elmer Elsworth Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "November 19, 1906",
  },
  {
    eventType: "marriage",
    primaryPerson: {
      name: "George Parker",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    secondaryPerson: {
      name: "Maude Betz",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "were married",
    date: "March 16, 1907",
  },
  {
    eventType: "marriage",
    primaryPerson: {
      name: "Harris Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    secondaryPerson: {
      name: "Flora Blanchard",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "were married",
    date: "April 9, 1907",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Maude E. (Parker) Simpson",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "November 11, 1907",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Ellen Alice Parker",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "May 18, 1909",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Wilfred Arthur Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "December 15, 1909",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Doris (Gadd) Ward",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "May 3, 1912",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "James Franklin Betz",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "July 23, 1919",
    description: "age 61",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "William Franklin Parker",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "May 13, 1920",
    description: "age 76",
  },
  {
    eventType: "marriage",
    primaryPerson: {
      name: "Mildred Betz",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    secondaryPerson: {
      name: "Harry Betz",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "were married",
    date: "January 18, 1925",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "Joseph Collins Gadd Sr.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "April 6, 1925",
    description: "age 81",
  },
  {
    eventType: "marriage",
    primaryPerson: {
      name: "Maude Parker",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    secondaryPerson: {
      name: "James Simpson",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "were married",
    date: "June 19, 1925",
  },
  {
    eventType: "marriage",
    primaryPerson: {
      name: "Wilfred Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    secondaryPerson: {
      name: "Ellen Parker",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "were married",
    date: "February 23, 1930",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "Lydia Anne (Allen) Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "March 27, 1930",
    description: "age 84",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Eugene Wilfred Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "December 15, 1931",
  },
  {
    eventType: "marriage",
    primaryPerson: {
      name: "Elmer Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    secondaryPerson: {
      name: "Laurine Fager",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "were married",
    date: "June 1, 1932",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "Maude Edna (Betz) Parker",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "October 23, 1932",
    description: "age 48",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Robert Byron Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "January 13, 1933",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Richard Floyd Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "June 1, 1934",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "George Irvin Parker",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "1940",
    description: "age 64",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "Sarah Ella Parker",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "February 24, 1946",
    description: "age 87",
  },
  {
    eventType: "miscellaneous",
    primaryPerson: {
      name: "Eugene Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "enlisted in Navy",
    date: "February 1951",
    description: "age 19",
  },
  {
    eventType: "marriage",
    primaryPerson: {
      name: "Eugene Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    secondaryPerson: {
      name: "Marilyn Reese",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "were married",
    date: "August 1952",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "Ellen Alice Parker",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "May 1, 1953",
    description: "age 42",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Michael Eugene Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "September 8, 1954",
  },
  {
    eventType: "miscellaneous",
    primaryPerson: {
      name: "Eugene Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "received honorable discharge from Navy",
    date: "March 18, 1955",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Catherine Ellen Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "August 18, 1957",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Patricia Diane Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "November 29, 1959",
  },
  {
    eventType: "miscellaneous",
    primaryPerson: {
      name: "Eugene Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "graduated from UKC",
    date: "May 1961",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Rebecca Sue Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "February 7, 1963",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "Flora Adelia (Blanchard) Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "February 4, 1974",
    description: "age 86",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Jeffrey Robert Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "June 21, 1974",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "Elmer Elsworth Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "January 12, 1975",
    description: "age 68",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "Wilfred Arthur Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "October 16, 1975",
    description: "age 65",
  },
  {
    eventType: "marriage",
    primaryPerson: {
      name: "Eugene Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    secondaryPerson: {
      name: "Marianne Turner",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "were married",
    date: "October 28, 1977",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "Harry Betz",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "November 11, 1977",
    description: "age 85",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Kevin Eugene Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "June 13, 1980",
  },
  {
    eventType: "birth",
    primaryPerson: {
      name: "Brett Richard Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "was born",
    date: "November 24, 1981",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "Mildred Betz",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "1987",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "Maude E. (Parker) Simpson",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "October 8, 1995",
    description: "age 87",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "Richard Floyd Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "January 10, 2010",
    description: "age 75",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "Eugene Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "September 22, 2012",
    description: "age 80",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "Jeanette Gadd",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "March 6, 2018",
    description: "age 76",
  },
  {
    eventType: "death",
    primaryPerson: {
      name: "Marilyn Reese",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop&crop=face",
    },
    action: "passed away",
    date: "June 6, 2021",
    description: "age 88",
  },
];
