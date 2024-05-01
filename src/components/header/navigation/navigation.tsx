import {ReactNode} from "react";

const Navigation = ({children}: { children: ReactNode }) => {
    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">{children}</ul>
        </nav>
    );
};

export default Navigation;