export default function Pips({
    className,
    count,
}: {
    className: string;
    count: number;
}) {
    return (
        <>
            {new Array(count).fill(null).map(() => (
                <div className={className} />
            ))}
        </>
    );
}
