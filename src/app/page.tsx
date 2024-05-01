import Header from "@/components/header/header";
import {Content, Section} from "@/components/content";
import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/contact";

export default function Home() {
    return (
        <>
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
        </>
    );
}
