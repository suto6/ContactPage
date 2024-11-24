import { RiMessage2Fill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";


const Form = () => {


    const [name, setName] = useState("user");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("No message");
    const [showResult, setShowResult] = useState(false);

    const viaCall = () => {
        console.log("Want to connect via call");
    };
    const viaMsg = () => {
        console.log("Want to connect via support chat");
    };
    const viaEmail = () => {
        console.log("Want to connect via email form");
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setName(e.target[0].value);
        setEmail(e.target[1].value);
        setMessage(e.target[2].value);
        // console.log(`Name: ${e.target[0].value}, Email: ${e.target[1].value}, Massage: ${e.target[2].value}`)
        setShowResult(true);
    }

    return (
        <>
            <div className="lg:w-2/4 px-10 lg:ml-52 mt-1 w-4/4">
                <div>
                    <div className="flex gap-5">
                        <button onClick={viaMsg} className="bg-black rounded-md text-white py-2 w-44 flex gap-2 px-3 hover:bg-white hover:text-black border-black border-solid border-2"><RiMessage2Fill className="text-lg" />Via Support Chat</button>
                        <button onClick={viaCall} className="bg-black rounded-md text-white py-2 w-44 flex gap-2 justify-center px-3 hover:bg-white hover:text-black border-black border-solid border-2"><FiPhoneCall className="text-lg" />Via Call</button>
                    </div>
                    <button onClick={viaEmail} className="mt-6 w-72 lg:w-96 rounded-md border-solid border-2 border-black py-2 text-lg hover:border-white">Via Email form</button>
                </div>
                <form action="" className="mt-6 lg:w-96" onSubmit={onSubmit}>
                    <div className="relative">
                        <label htmlFor="name" className="absolute top-[-10px] left-4 px-2 bg-white">Name</label>
                        <input className="w-full border-solid border-black border-2 rounded-md py-2 mb-6 px-2" type="text" name="name" id="name" />
                    </div>
                    <div className="relative">
                        <label htmlFor="email" className="absolute top-[-10px] left-4 px-2 bg-white">Email</label>
                        <input className="w-full border-solid border-black border-2 rounded-md py-2 mb-6 px-2" type="email" name="email" id="email" />
                    </div>
                    <div className="relative">
                        <label htmlFor="message" className="absolute top-[-10px] left-4 px-2 bg-white">Message</label>
                        <textarea name="message" id="message" className="w-full border-solid border-black border-2 rounded-md p-2 mb-6" rows={6}></textarea>
                    </div>
                    <div className="float-end">
                        <button type="submit" className="bg-black text-white p-2 w-44 rounded-md hover:bg-white hover:text-black border-black border-solid border-2">Submit</button>
                    </div>
                {showResult && (
                    <div className=" box-border border-2 p-2 border-black mt-4 w-fit">
                        <div>Name: {name}</div>
                        <div>Email: {email}</div>
                        <div>Massage: {message}</div>
                    </div>
                )}
                </form>
            </div>
        </>
    )
}

export default Form