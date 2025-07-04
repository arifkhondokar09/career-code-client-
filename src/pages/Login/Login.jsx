

import { use } from 'react';
import LoginLottie from '../../assets/login.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {
    const { loginUser } = use(AuthContext);
    const navigate=useNavigate();



    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        // login firebase
        loginUser(email, password)
            .then(() => {
                // console.log(result.user)
                navigate("/")
            })
            .catch(error => {
                // console.log(error.message);
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className='w-[280px]' animationData={LoginLottie} loop={true}

                    ></Lottie>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login Now!</h1>
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;