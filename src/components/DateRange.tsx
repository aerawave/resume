import type { DateString } from "@/data/resume-data";

export default function DateRange({
    start,
    end,
    className,
}: {
    start?: DateString;
    end?: DateString;
    className?: string;
}) {
    if (!start && !end) {
        return null;
    }

    if (start && end) {
        return (
            <span className={className}>
                {start} &ndash; {end}
            </span>
        );
    }

    if (end) {
        return <span className={className}>{end}</span>;
    }

    if (start) {
        return <span className={className}>{start} &ndash; Present</span>;
    }

    return null;
}
