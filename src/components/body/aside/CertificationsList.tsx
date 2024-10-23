import type { Certification } from "@/data/resume-data";

function CertificationsListItem({
    certification,
}: {
    certification: Certification;
}) {
    return (
        <section className="certification">
            <h3>{certification.name}</h3>
            <span>{certification.date}</span>
        </section>
    );
}

export default function CertificationsList({
    certifications,
}: {
    certifications: Certification[];
}) {
    return (
        <section className="certifications">
            <h2>Certifications</h2>
            <hr />
            {certifications.map((certification) => (
                <CertificationsListItem certification={certification} />
            ))}
        </section>
    );
}
