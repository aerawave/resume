export default function ProfessionalSummary({
    summary,
}: {
    summary: React.ReactNode;
}) {
    return (
        <section className="summary">
            <h2>Professional Summary</h2>
            <hr />
            <p>{summary}</p>
        </section>
    );
}
