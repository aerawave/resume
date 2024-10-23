import Pips from "@/components/Pips";
import { SkillLevels, type Skill } from "@/data/resume-data";

function SkillsListItem({ skill }: { skill: Exclude<Skill, string> }) {
    const level_key =
        typeof skill.level === "number"
            ? SkillLevels[skill.level - 1]
            : skill.level;
    const level = SkillLevels.indexOf(level_key) + 1;
    const empty = 5 - level;

    return (
        <section className="skill">
            <h3>{skill.name}</h3>
            <div className="level">
                <Pips className={level_key} count={level} />
                <Pips className="empty" count={empty} />
            </div>
        </section>
    );
}

export default function SkillsList({ skills }: { skills: Skill[] }) {
    const skills_with_levels: Exclude<Skill, string>[] = [];
    const skills_without_levels: string[] = [];

    for (const skill of skills) {
        if (typeof skill === "string") {
            skills_without_levels.push(skill);
        } else {
            skills_with_levels.push(skill);
        }
    }

    return (
        <section className="skills">
            <h2>Skills</h2>
            <hr />
            {skills_with_levels.map((skill) => (
                <SkillsListItem skill={skill} />
            ))}
            {skills_without_levels.length > 0 && (
                <p>
                    <strong>Other skills:</strong>{" "}
                    <em>{skills_without_levels.join(", ")}</em>
                </p>
            )}
        </section>
    );
}
