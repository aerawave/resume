import type { Reference, References } from "@/data/resume-data";

function ReferencesListItem({ reference }: { reference: Reference }) {
    return (
        <section className="reference">
            <h3>{reference.name}</h3>
            {reference.company && (
                <span className="company">{reference.company}</span>
            )}
            {reference.phone && (
                <a className="phone" href={`tel:${reference.phone}`}>
                    {reference.phone}
                </a>
            )}
            {reference.email && (
                <a className="email" href={`mailto:${reference.email}`}>
                    {reference.email}
                </a>
            )}
        </section>
    );
}

export default function ReferencesList({
    references,
}: {
    references: References;
}) {
    return (
        <section className="references">
            <h2>References</h2>
            <hr />
            {typeof references === "string" ? (
                <p>{references}</p>
            ) : (
                references.map((reference) => (
                    <ReferencesListItem reference={reference} />
                ))
            )}
        </section>
    );
}
