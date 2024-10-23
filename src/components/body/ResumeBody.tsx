import type { ResumeData } from "@/data/resume-data";
import ProfessionalSummary from "./main/ProfessionalSummary";
import WorkExperienceList from "./main/WorkExperienceList";
import NotableProjectsList from "./main/NotableProjectsList";
import EducationList from "./aside/EducationList";
import SkillsList from "./aside/SkillsList";
import LanguagesList from "./aside/LanguagesList";
import CertificationsList from "./aside/CertificationsList";
import LinksList from "./aside/LinksList";
import ReferencesList from "./aside/ReferencesList";

function Main({ data }: { data: ResumeData }) {
    const elements: React.ReactNode[] = [];

    if (data.summary) {
        elements.push(<ProfessionalSummary key={0} summary={data.summary} />);
    }

    if (data.experience && data.experience.length) {
        elements.push(
            <WorkExperienceList
                key={elements.length}
                experience={data.experience}
            />,
        );
    }

    if (data.notableProjects && data.notableProjects.length) {
        elements.push(
            <NotableProjectsList
                key={elements.length}
                projects={data.notableProjects}
            />,
        );
    }

    if (elements.length > 0) {
        const element_count = elements.length - 1;

        for (let i = 0; i < element_count; i++) {
            elements.splice(
                i * 2 + 1,
                0,
                <hr key={elements.length} className="full" />,
            );
        }
    }

    return <main>{elements}</main>;
}

function Aside({ data }: { data: ResumeData }) {
    const elements: React.ReactNode[] = [];

    if (data.education && data.education.length) {
        elements.push(
            <EducationList key={elements.length} education={data.education} />,
        );
    }

    if (data.skills && data.skills.length) {
        elements.push(
            <SkillsList key={elements.length} skills={data.skills} />,
        );
    }

    if (data.languages && data.languages.length) {
        elements.push(
            <LanguagesList key={elements.length} languages={data.languages} />,
        );
    }

    if (data.certifications && data.certifications.length) {
        elements.push(
            <CertificationsList
                key={elements.length}
                certifications={data.certifications}
            />,
        );
    }

    if (data.links && data.links.length) {
        elements.push(<LinksList key={elements.length} links={data.links} />);
    }

    if (data.references && data.references.length) {
        elements.push(
            <ReferencesList
                key={elements.length}
                references={data.references}
            />,
        );
    }

    if (elements.length > 0) {
        const element_count = elements.length - 1;

        for (let i = 0; i < element_count; i++) {
            elements.splice(
                i * 2 + 1,
                0,
                <hr key={elements.length} className="full" />,
            );
        }
    }

    return <aside>{elements}</aside>;
}

export default function ResumeBody({ data }: { data: ResumeData }) {
    return (
        <section className="body">
            <Main data={data} />
            <Aside data={data} />
        </section>
    );
}
