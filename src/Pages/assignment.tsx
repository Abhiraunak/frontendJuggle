import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Assignment1(){
    return (
        <div className="bg-cyan-300 h-screen pl-10 pt-20">
            <div className="rounded-lg bg-stone-200 w-60 h-60 ">
                <div className="flex justify-between px-3 py-3">
                    <h3 className="font-semibold">$120/hr</h3>
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
                <h3 className="font-bold text-3xl px-5">Senior UI Developer</h3>
                <FontAwesomeIcon icon={faArrowRight} className="px-10 text-orange-700" />
            </div>
        </div>
    )
}