import {useMemo} from "react";

type TechnologiesList = {
    technology: string;
    id: string;
}

const Technologies = ({technologies}: { technologies: string[] }) => {
    const technologiesList = useMemo(() =>
            technologies.map((technology: string): TechnologiesList => ({technology, id: crypto.randomUUID()})),
        [technologies]
    );

    return (
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologiesList.map(({technology, id}) => (
                <li key={id} className="mr-1.5 mt-2">
                    <div
                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
                    >
                        {technology}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Technologies;