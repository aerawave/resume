import type {
    WorkExperienceEntry,
    WorkExperiencePosition,
} from "@/data/resume-data";

function WorkExperienceListItemPosition({
    position,
}: {
    position: WorkExperiencePosition;
}) {
    return (
        <section className="position">
            <div className="title-and-dates">
                <h4 className="title">{position.title}</h4>
                <span className="dates">
                    {position.start} &ndash; {position.end}
                </span>
            </div>
            <ul className="points">
                {position.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </section>
    );
}

function WorkExperienceListItem({
    experience,
}: {
    experience: WorkExperienceEntry;
}) {
    return (
        <section className="work-experience-item">
            <div className="organization-and-location">
                <h3 className="organization">{experience.organization}</h3>
                <span className="location">{experience.location}</span>
            </div>
            {experience.positions.map((position, i) => (
                <WorkExperienceListItemPosition key={i} position={position} />
            ))}
        </section>
    );
}

export default function WorkExperienceList({
    experience,
}: {
    experience: WorkExperienceEntry[];
}) {
    return (
        <section className="work-experience">
            <h2>Work Experience</h2>
            <hr />
            {experience.map((experience, i) => (
                <WorkExperienceListItem key={i} experience={experience} />
            ))}
        </section>
    );
}
