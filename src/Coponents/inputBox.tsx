type inputBoxprops = {
    label : string;
    placeholder : any;
}

export function Inputbox({label, placeholder} : inputBoxprops){
    return (
        <div>
            <div className="text-sm font-medium text-left py-2">
                {label}
            </div>
            <input placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" />
        </div>
    );
}