import DateRange from "@/components/DateRange";
import type { EducationEntry } from "@/data/resume-data";

function EducationListItem({ entry }: { entry: EducationEntry }) {
    return (
        <section className="education-item">
            <h3>
                {entry.level} in {entry.field}
            </h3>
            <span className="school">{entry.school.name}</span>
            <span className="location">{entry.school.location}</span>
            <DateRange className="dates" start={entry.start} end={entry.end} />
        </section>
    );
}

export default function EducationList({
    education,
}: {
    education: EducationEntry[];
}) {
    return (
        <section className="education">
            <h2>Education</h2>
            <hr />
            {education.map((entry) => (
                <EducationListItem entry={entry} />
            ))}
        </section>
    );
}
