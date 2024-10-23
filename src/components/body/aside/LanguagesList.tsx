import { LanguageFluencies, type Language } from "@/data/resume-data";

function LanguagesListItem({
    language,
    showLevel = false,
}: {
    language: Language;
    showLevel?: boolean;
}) {
    const level_name =
        typeof language.level === "number"
            ? LanguageFluencies[language.level]
            : language.level;

    return (
        <section className="language">
            <h3>{language.name}</h3>
            {showLevel && <span className="level">{level_name}</span>}
        </section>
    );
}

export default function LanguagesList({
    languages,
}: {
    languages: Language[];
}) {
    return (
        <section className="languages">
            <h2>Languages</h2>
            <hr />
            {languages.map((language, i) => (
                <LanguagesListItem key={i} language={language} />
            ))}
        </section>
    );
}
