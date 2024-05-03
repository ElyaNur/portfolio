import {useMemo} from "react";
import {Badge} from "@/components/ui/badge";

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
                    <Badge variant="portfolio">
                        {technology}
                    </Badge>
                </li>
            ))}
        </ul>
    );
};

export default Technologies;