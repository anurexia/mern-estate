import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCircleNotch } from "react-icons/fa";

const SignUp = () => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // - ireredirect sa sign in page once makapag register
    const navigate = useNavigate();

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.id]: evt.target.value,
        });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            setLoading(true);
            // - sign up
            const response = await fetch("/api/auth/signUp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // -get data
            const data = await response.json();

            // - check if hindi success
            if (data.success === false) {
                setLoading(false);
                setError(data.message);
                return;
            }

            setLoading(false);
            setError(null);

            //  - kapag registered na, redirect sa sign in page
            navigate("/sign-in");
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    onChange={handleChange}
                    className="border p-3 rounded-lg"
                    type="text"
                    placeholder="username"
                    id="username"
                />
                <input
                    onChange={handleChange}
                    className="border p-3 rounded-lg"
                    type="email"
                    placeholder="email"
                    id="email"
                />
                <input
                    onChange={handleChange}
                    className="border p-3 rounded-lg"
                    type="password"
                    placeholder="password"
                    id="password"
                />
                <button
                    //- will be disabled when loading is true
                    disabled={loading}
                    className="bg-stone-800 p-3 rounded-lg text-white text-lg font-semibold w-full uppercase hover:opacity-90 disabled:opacity-80">
                    {loading ? (
                        <span className="flex justify-center">
                            <FaCircleNotch className="animate-spin" />
                        </span>
                    ) : (
                        "Sign Up"
                    )}
                </button>
            </form>
            <div className="flex justify-center gap-1 my-4">
                <p className="font-light">Have an account?</p>
                <Link to="/sign-in">
                    <span className="text-blue-400 font-bold">Sign In</span>
                </Link>
            </div>
            {error && <p className="text-red-400 my-4">{error}</p>}
        </div>
    );
};

export default SignUp;
