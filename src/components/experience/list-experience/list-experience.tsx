import Header from "@/components/experience/list-experience/header";
import Title from "@/components/experience/list-experience/title";
import Description from "@/components/experience/list-experience/description";
import Technologies from "@/components/experience/list-experience/technologies";

type ListExperienceProps = {
    duration: string;
    title: string;
    workOn?: string;
    description: string;
    link?: string;
    technologies: string[];
};

const ListExperience = ({duration, title, workOn, description, link, technologies}: ListExperienceProps) => {
    return (
        <li className="mb-12">
            <div
                className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
                <div
                    className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                ></div>
                <Header duration={duration}/>
                <div className="z-10 sm:col-span-6">
                    <Title link={link} title={title} workOn={workOn}/>
                    <Description description={description}/>
                    <Technologies technologies={technologies}/>
                </div>
            </div>
        </li>
    );
};

export default ListExperience;