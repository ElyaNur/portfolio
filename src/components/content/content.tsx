import {ReactNode} from "react";

const Content = ({children}: { children: ReactNode }) => {
    return (
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            {children}
        </main>
    );
};

export default Content;