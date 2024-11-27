type buttonProp = {
    label : string;
    onClick: () => void; // it's a better way to handle the any type (means not specific type)
}
export function Button({label, onClick} :buttonProp) {
    return <button onClick={onClick} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{label}</button>
}