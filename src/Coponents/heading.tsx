type headingProps = {
    label: string;
};

export function Heading({label} : headingProps){
    return (
        <div className="font-bold text-4xl pt-6">
            {label}
        </div>
    );
}