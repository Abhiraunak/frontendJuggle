import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../assets/devphoto.png';
export default function Landing(){
    return (
        <div className="main w-full h-screen bg-gradient-to-r from-cyan-200 via-sky-100 to-indigo-200 font-['gilroy']">
            <div className="container relative mx-auto h-screen">
                <div className="navbar flex justify-between items-center w-full py-6 px-4">
                    <div className="font-semibold">
                        Abhishek
                    </div>
                    <div className="hidden lg:flex gap-10">
                        <h1 className="text-sm"> About </h1>
                        <h1 className="text-sm opacity-50"> Works </h1>
                        <h1 className="text-sm opacity-50"> Services </h1>
                    </div>
                    <div className="lg:hidden">
                    <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full flex flex-col items-center">
                    <div className="img w-24 h-24 lg:w-32 lg:h-32 bg-gray-300 rounded-full">
                       <img src={logo} alt="Profile picture of Abhishek" className="rounded-full" />
                    </div>
                    <h3 className="font-semibold text-xl lg:text-2xl pt-4">Hi, I'm Abhishek 👋🏼</h3>
                    <h1 className="w-3/4 tracking-tighter font-semibold text-4xl lg:text-5xl text-center leading-none mt-3">Bulding digital products brands and experiences.</h1>
                    <p className="text-center w-3/4 mt-4 text-sm lg:text-lg opacity-[50%] font-semibold tracking-tight "> A skilled MERN stack developer specializing in creating robust web applications, proficient in MongoDB, Express.js, React, and Node.js.
                    </p>
                    <button className="px-4 lg:px-6 py-2 lg:py-3 bg-black rounded-full text-white font-semibold lg:font-medium text-xs lg:text-base tracking-tight mt-7">Connect with me</button>
                </div>
            </div>
        </div>
    );
}

