import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Home from "../Home/Home";

const Login = () => {
    const { signIn,loading, setLoading, providerLogin } = useContext(AuthContext);
    console.log(loading)
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    //google auth provider
    const GoogleProvider = new GoogleAuthProvider();

    //login with google
    const handleGoogleSignIn = () => {
        providerLogin(GoogleProvider)
            .then(result => {
                setLoading(false);
                const user = result.user;
                alert('Login successfully');
                {user.email && (
                    <Navigate to="/" replace={true} />
                  )}
                console.log(user);
                
            })
            .catch(error => console.error(error))
    }

    //submit button work function
    const submitHandle = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        alert('Login successfully');
        signIn(email, password)
            .then(result => {
                const user = result.user;
                setLoading(false);

                {user && (
                    <Navigate to="/" replace={true} />
                  )}
                console.log(user);
                form.reset();
                setError('');
                if(user.email){
                    navigate(from, {replace: true});
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);

                
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div className="hero min-h-screen bg-blueAss text-white">
            {loading === true ?
                <div className="w-full my-24 bg-blueAss"><div className="w-16 h-16 border-4 ml-5 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>
                 :
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <form onSubmit={submitHandle} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="email" className="input text-black input-bordered" required/>
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
                            <p className="label-text-alt text-left text-base ">New to Cloud Kichen ?<Link to='/singup' className="link link-hover text-orange"> Sing Up</Link> </p>
                            </label>
                        </div>
                        <p className="text-red-500">{error}</p>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange">Login</button>
                            <button onClick={handleGoogleSignIn} className="btn mt-3 text-black hover:text-white bg-orange">Login with Google</button>
                        </div>
                    </div>
                </form>
            </div> }
        </div>
    );
}
export default Login;