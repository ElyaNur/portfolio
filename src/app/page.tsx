"use client";

import Header from "@/components/header/header";
import {Content, Section} from "@/components/content";
import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/contact";
import useMouse from '@react-hook/mouse-position'
import {useRef} from "react";

export default function Home() {
    const ref = useRef(null)
    const mousePosition = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100,
    })

    return (
        <div className="relative" ref={ref}>
            <div
                className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
                style={{background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`}}
            ></div>
            <div
                className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 font-inter"
            >
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <Header/>
                    <Content>
                        <Section id="about" ariaLabel="About me">
                            <About/>
                        </Section>
                        <Section id="experience" ariaLabel="Work experience">
                            <Experience/>
                        </Section>
                        <Section id="projects" ariaLabel="Selected projects">
                            <Projects/>
                        </Section>
                        <Section id="contact" ariaLabel="Contact me">
                            <Contact/>
                        </Section>
                    </Content>
                </div>
            </div>
        </div>
    );
}
