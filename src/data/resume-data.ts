export const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
] as const;

export type Month = (typeof Months)[number];
export type Present = "Present";
export type DateString =
    | `${number}`
    | `${Month} ${number}`
    | `${Month} ${number} ${number}`
    | Present;
export type DateRange = `${DateString}-${DateString}`;
export type EducationEntry = {
    start?: DateString;
    end?: DateString;
    level: string;
    field: string;
    subfield: string;
    school: {
        name: string;
        location: string;
    };
};

export type Certification = {
    date: DateString | DateRange;
    name: string;
};

export const SkillLevels = [
    "novice",
    "beginner",
    "skillful",
    "experienced",
    "expert",
] as const;

export type SkillLevel = (typeof SkillLevels)[number];

export type Skill =
    | {
          name: string;
          level: SkillLevel | number;
      }
    | string;

export const LanguageLevels = [
    "Native speaker",
    "Highly Proficient",
    "Very good command",
    "Good working knowledge",
    "Working knowledge",
    "C2",
    "C1",
    "B2",
    "B1",
    "A2",
    "A1",
] as const;

export type LanguageLevel = (typeof LanguageLevels)[number];

export type Language = {
    name: string;
    level: LanguageLevel | number;
};

export type Link = {
    url: string;
    prettyUrl?: string;
    label?: string;
} & (
    | {
          prettyUrl: string;
      }
    | {
          label: string;
      }
);

export type WorkExperiencePosition = {
    title: string;
    start: DateString;
    end: DateString;
    points: React.ReactNode[];
    skills: string[];
};

export type WorkExperienceEntry = {
    organization: string;
    location: string;
    positions: WorkExperiencePosition[];
};

export type NotableProjectEntry = {
    name: string;
    description?: string;
    points?: React.ReactNode[];
};

export type Reference = {
    name: string;
    company?: string;
    phone?: string;
    email?: string;
} & (
    | {
          phone: string;
      }
    | {
          email: string;
      }
);

export type References = Reference[] | "Available upon request";

export type ResumeData = {
    name: string;
    title: string;
    phone: string;
    email: string;
    location: string;
    summary: React.ReactNode;
    education: EducationEntry[];
    certifications: Certification[];
    skills: Skill[];
    languages: Language[];
    links: Link[];
    experience: WorkExperienceEntry[];
    notableProjects: NotableProjectEntry[];
    references: References;
};
