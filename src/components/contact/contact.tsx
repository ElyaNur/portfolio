import React from 'react';
import {Button} from "@/components/ui/button";

const Contact = () => {
    return (
        <div>
            <h3 className="text-2xl font-bold leading-tight">Get In Touch</h3>
            <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a
                question or just want to say hi, I’ll try my best to get back to you!</p>
            <Button className="mt-5 text-slate-900 font-bold" asChild>
                <a href="mailto:charis.aceh@gmail.com" rel="noopener noreferrer" target="_blank">
                    Say hello!
                </a>
            </Button>
        </div>
    );
};

export default Contact;