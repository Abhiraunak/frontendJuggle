import { Heading } from "../Components/heading";
import { Subheading } from "../Components/Subheading";
import { Inputbox } from "../Components/inputBox";
import { Button } from "../Components/button";
import { BottomWarning } from "../Components/bottomWarning";
export default function Signin() {
    return (
        <div className="bg-gray-200 h-screen flex justify-center">
            <div className="pt-6">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
                    <Heading label="Sign In" />
                    <Subheading label="Enter your credentials to access your account" />
                    <Inputbox placeholder="example@gmail.com" label="Email" />
                    <Inputbox placeholder="........." label="Password" />
                    <div className="pt-4">
                        <Button label="Sign In" onClick={handleSignInClick} />
                    </div>
                    <BottomWarning label="Don't have an account?" buttonText="Sign up" to={"/signup"} />
                </div>
            </div>
        </div>
    )
}

/*
    Why this function here the reasons are
     1. onClick handler is immediately invoked when the component renders, rather than being triggered on button click 
     2. To correctly handle the button click, you should define a function and pass it to the onClick prop
*/
function handleSignInClick(){
    return (
        alert("Sign in task remain")
    )
}