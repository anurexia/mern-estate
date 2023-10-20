import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCircleNotch } from "react-icons/fa";

const SignIn = () => {
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
            const response = await fetch("/api/auth/signIn", {
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
            navigate("/");
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                    className="bg-stone-700 p-3 rounded-lg text-white text-lg font-semibold w-full uppercase hover:opacity-90 disabled:opacity-80">
                    {loading ? (
                        <span className="flex justify-center">
                            <FaCircleNotch className="animate-spin" />
                        </span>
                    ) : (
                        "Sign In"
                    )}
                </button>
            </form>
            <div className="flex justify-center gap-1 my-4">
                <p className="font-light">Dont have an account yet?</p>
                <Link to="/sign-up">
                    <span className="text-blue-400 font-bold">Sign Up</span>
                </Link>
            </div>
            {error && (
                <div className="p-3 bg-neutral-100 rounded-lg">
                    <p className="text-red-700 my-4 text-center uppercase">
                        Error: {error}
                    </p>
                </div>
            )}
        </div>
    );
};

export default SignIn;
