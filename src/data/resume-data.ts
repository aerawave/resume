export type FirstName = string;
export type LastName = string;

export type Name = string | `${FirstName} ${LastName}`;

export const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
] as const;
export type Month = (typeof Months)[number];
export type Present = "Present";
export type DateString =
    | `${number}`
    | `${Month} ${number}`
    | `${Month} ${number}, ${number}`
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

/*
    The below values are in ascending order of proficiency.
*/
export const SkillLevels = [
    "novice",
    "beginner",
    "skillful",
    "experienced",
    "expert",
] as const;

export type SkillLevel = (typeof SkillLevels)[number];

/*
    The below type can be in the form of an object, but it can also be provided a string which serves as the name of the skill, with no level provided.
    
    If the level is provided, it is used to display expertise in the skill in a pretty manner.

    If it is not, the skil is just listed as a string, representing some familiarity but without profound expertise.
*/
export type Skill =
    | {
          // The name of the skill
          name: string;
          // The level of the skill
          level: SkillLevel | number;
      }
    // The name of the skill
    | string;

/*
    The below values are in descending order of fluency.
*/
export const LanguageFluencies = [
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

export type LanguageFluency = (typeof LanguageFluencies)[number];

/*
    The below type is a representation of a spoken language the candidate has some degree of fluency in.
*/
export type Language = {
    // The name of the language
    name: string;
    // The fluency of the language
    level: LanguageFluency | number;
};

/*
    In the below type is a representation of a link to a website or other resource.

    Common use cases are:
    - LinkedIn
    - GitHub
*/
export type Link = {
    // An icon that represents the link.
    icon?: React.ReactNode;
    // Where the link goes to (for instance "https://linkedin.com/in/john-smith/")
    url: string;
    // Text that is displayed for the link that is nicer looking but still spells out the URL (for instance "linkedin.com/in/john-smith")
    prettyUrl?: string;
    // Text that is displayed for the link that is most readable but does not function as an actual URL (for instance "LinkedIn")
    label?: React.ReactNode;
} & (
    | {
          prettyUrl: string;
      }
    | {
          label: React.ReactNode;
      }
);

/*
    The below type is a representation of a job position held by the candidate, this will be displayed underneath the organization the candidate worked for.
*/
export type WorkExperiencePosition = {
    // The title of the position
    title: string;
    // The start date of the position
    start: DateString;
    // The end date of the position
    end: DateString;
    /*
        Description points for what the candidate did in the position.

        This is a ReactNode so that skills can be rendered with a "skill" class, for instance: `<span class="skill">HTML</span>`
    */
    points: React.ReactNode[];
    // The skills the candidate used in the position
    skills: string[];
};

/*
    The below type is a representation of an organization the candidate worked for, and the positions they held
*/
export type WorkExperienceEntry = {
    // The name of the organization
    organization: string;
    // The location of the organization (usually in the form of a city and state, for instance "Austin, TX")
    location: string;
    // The positions the candidate held at the organization
    positions: WorkExperiencePosition[];
};

/*
    The below type is a representation of a notable project the candidate worked on.
*/
export type NotableProjectEntry = {
    // The name of the project
    name: string;
    // A description of the project
    description?: React.ReactNode;
    // Description points for what the candidate did in the project
    points?: React.ReactNode[];
};

/*
    The below type is a representation of a reference the candidate has who can vouch for their skills and experience.
*/
export type Reference = {
    // The name of the reference
    name: Name;
    // The company the reference works for
    company?: string;
    // The phone number of the reference
    phone?: string;
    // The email address of the reference
    email?: string;
} & (
    | {
          phone: string;
      }
    | {
          email: string;
      }
);

/*
    The below type can be an array of references, or a string that says "Available upon request" to show that the candidate is able to provide references on request.
*/
export type References = Reference[] | "Available upon request";

/*
    The below type is the utilization of all the other types above this line in this file. It is the resume data which will be used to render the resume in the browser.
*/
export type ResumeData = {
    // The name of the candidate
    name: Name;
    // The desired title of the candidate
    title: string;
    // The phone number of the candidate
    phone: string;
    // The email address of the candidate
    email: string;
    // The location of the candidate (usually in the form of a city and state, for instance "Austin, TX")
    location: string;
    // A summary of the resume, usually highlighting the candidate's most relevant experience
    summary: React.ReactNode;
    // The education the candidate has
    education?: EducationEntry[];
    // The certifications the candidate has
    certifications?: Certification[];
    // The skills the candidate has
    skills?: Skill[];
    // The languages the candidate can speak
    languages?: Language[];
    // The links the candidate has
    links?: Link[];
    // The professional experience the candidate has
    experience?: WorkExperienceEntry[];
    // The notable projects the candidate has worked on
    notableProjects?: NotableProjectEntry[];
    // The references the candidate has (or does not have)
    references?: References;
};
