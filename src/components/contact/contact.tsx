import React from 'react';
import {Button} from "@/components/ui/button";

const Contact = () => {
    return (
        <div>
            <h3 className="text-2xl font-bold leading-tight">Get In Touch</h3>
            <p>I&apos;m actively seeking opportunities to gain new skills and experience. Feel free to reach out if you
                have
                any projects or tasks that I could learn from!</p>
            <Button className="mt-5 text-slate-900 font-bold" asChild>
                <a href="mailto:charis.aceh@gmail.com" rel="noopener noreferrer" target="_blank">
                    Say hello!
                </a>
            </Button>
        </div>
    );
};

export default Contact;