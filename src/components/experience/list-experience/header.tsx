import {useMemo} from 'react';

const Header = ({duration}: { duration: string }) => {
    const formatAriaLabelHeader = useMemo(() => duration.replace('—', 'to'), [duration]);

    return (
        <header
            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
            aria-label={formatAriaLabelHeader}
        >
            {duration}
        </header>
    );
};

export default Header;