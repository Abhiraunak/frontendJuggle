import { Heading } from "../Components/heading";
import { Subheading } from "../Components/Subheading";
import { Inputbox } from "../Components/inputBox";
import { Button } from "../Components/button";
import { BottomWarning } from "../Components/bottomWarning";
export default function signup(){
    return (
        <div className="bg-gray-200 h-screen flex justify-center">
            <div className="pt-6">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label="Sign up" />
                    <Subheading label="Enter your information to create an account" />
                    <Inputbox placeholder={"John"} label="First Name" />
                    <Inputbox placeholder={"Doe"} label="Last Name" />
                    <Inputbox placeholder={"example@email.com"} label="Email" />
                    <Inputbox placeholder={"........."} label="Password" />

                    <div className="pt-4">
                        <Button label="Sign up" onClick={handleSignUpClick} />
                    </div>
                    <BottomWarning label="Already have an account?" buttonText="Sign In" to={"/signin"} />
                </div>
            </div>
           
        </div>
    )
}

function handleSignUpClick(){
    return (
        alert("It still remain")
    )
}