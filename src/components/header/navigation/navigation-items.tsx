"use client";

import {ReactNode} from "react";
import {Link} from "react-scroll";

type NavigationItemsProps = {
    children: ReactNode
    href: string
}

const NavigationItems = ({children, href}: NavigationItemsProps) => {
    return (
        <li>
            <Link
                activeClass="[&>span:nth-child(1)]:w-16 [&>span:nth-child(1)]:bg-slate-200 [&>span]:opacity-100 [&>span]:text-slate-200"
                to={href}
                href={'#' + href}
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                className="group flex items-center py-3"
            >
                <span
                    className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span
                    className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    {children}
                </span>
            </Link>
        </li>
    );
};

export default NavigationItems;