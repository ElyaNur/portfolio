const Description = ({description}: { description: string }) => {
    return (
        <p className="mt-2 text-sm leading-normal">
            {description}
        </p>
    );
};

export default Description;