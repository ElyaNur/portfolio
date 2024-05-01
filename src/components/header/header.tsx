import HeaderDescription from "@/components/header/header-description";
import Navigation from "@/components/header/navigation/navigation";
import NavigationItems from "@/components/header/navigation/navigation-items";
import SocialMedia from "@/components/header/social-media";

const Header = () => {
    return (
        <header
            className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 max-w-xs"
        >
            <div>
                <HeaderDescription/>
                <Navigation>
                    <NavigationItems href="about">About</NavigationItems>
                    <NavigationItems href="experience">Experience</NavigationItems>
                    <NavigationItems href="projects">Project</NavigationItems>
                    <NavigationItems href="contact">Contact</NavigationItems>
                </Navigation>
            </div>
            <SocialMedia/>
        </header>
    );
};

export default Header;