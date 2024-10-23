import type { NotableProjectEntry } from "@/data/resume-data";

function NotableProjectsListItem({
    project,
}: {
    project: NotableProjectEntry;
}) {
    return (
        <section className="notable-project">
            <h3>{project.name}</h3>
            {project.description && (
                <p className="description">{project.description}</p>
            )}
            {project.points && (
                <ul className="points">
                    {project.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default function NotableProjectsList({
    projects,
}: {
    projects: NotableProjectEntry[];
}) {
    return (
        <section className="notable-projects">
            <h2>Notable Projects</h2>
            <hr />
            {projects.map((project, i) => (
                <NotableProjectsListItem key={i} project={project} />
            ))}
        </section>
    );
}
