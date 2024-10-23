import type { Link } from "@/data/resume-data";

export default function LinksList({ links }: { links: Link[] }) {
    return (
        <section className="links">
            <h2>Links</h2>
            <hr />
            <ul>
                {links.map((link, i) => (
                    <li key={i}>
                        {link.icon}
                        <a href={link.url}>
                            {link.label || link.prettyUrl || link.url}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
