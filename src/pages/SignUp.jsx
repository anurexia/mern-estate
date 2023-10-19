import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
            <form className="flex flex-col gap-4">
                <input
                    className="border p-3 rounded-lg"
                    type="text"
                    placeholder="username"
                    id="username"
                />
                <input
                    className="border p-3 rounded-lg"
                    type="email"
                    placeholder="email"
                    id="email"
                />
                <input
                    className="border p-3 rounded-lg"
                    type="password"
                    placeholder="password"
                    id="password"
                />
                <button className="bg-stone-800 p-3 rounded-lg text-white text-lg font-semibold w-full uppercase hover:opacity-90 disabled:opacity-80">
                    Sign Up
                </button>
            </form>
            <div className="flex justify-center gap-1 my-4">
                <p className="font-light">Have an account?</p>
                <Link to="/sign-in">
                    <span className="text-blue-400 font-bold">Sign In</span>
                </Link>
            </div>
        </div>
    );
};

export default SignUp;
