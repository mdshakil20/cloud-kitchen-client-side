import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="hero min-h-screen bg-blueAss text-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input text-black input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input text-black input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" placeholder="photo url" name="photoUrl" className="input text-black input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name="password" className="input text-black input-bordered" required/>
                            <label className="label">
                                <Link className="label-text-alt link link-hover text-base">Forgot password?</Link>
                            </label>
                            <label className="label">
                            <p className="label-text-alt text-left text-base ">Already have an account ?<Link to='/login' className="link link-hover text-orange"> Login</Link> </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Signup;