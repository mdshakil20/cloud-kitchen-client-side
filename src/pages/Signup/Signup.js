import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Signup = () => {
    useTitle('Sign up');

    const { createUser, updateUserProfile, loading, setLoading } = useContext(AuthContext);
    const [err, setErr] = useState('');

    const signupBtnHandle = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setLoading(false);
                setErr('');
                alert('Successfully Signup.');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                
            })
            .catch(e => {
                setErr(e.message);
                setLoading(false);
            })

    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => setErr(error.message));
            setLoading(false);
    }
    return (
        <div className="hero min-h-screen bg-blueAss text-white">
            {
                loading  &&
                <div className="w-full my-24 bg-blueAss"><div className="w-16 h-16 border-4 ml-5 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>
            }
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <form onSubmit={signupBtnHandle} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input text-black input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input text-black input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" placeholder="photo url" name="photoURL" className="input text-black input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name="password" className="input text-black input-bordered" required />
                            <label className="label">
                                <Link className="label-text-alt link link-hover text-base">Forgot password?</Link>
                            </label>
                            <label className="label">
                                <p className=" label-text-alt text-left text-base ">Already have an account ?<Link to='/login' className="link link-hover text-orange"> Login</Link> </p>
                            </label>
                            <p className="text-orange label-text-alt text-left text-base ">{err}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange">Signup</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}
export default Signup;