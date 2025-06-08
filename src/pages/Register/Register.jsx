import Lottie from 'lottie-react';
import RegisterAnimation from '../../assets/register.json'
import { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import SocialLogin from '../Shared/SocialLogin';



const Register = () => {
    const { createUser}=use(AuthContext);
    const navigate=useNavigate();

    
   

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
         createUser(email,password)
         .then(result=> {
            console.log(result.user)
            navigate("/")
         })
         .catch(error=> {
            console.log(error.message);
            console.log(error.code)
         })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className='w-[330px]' animationData={RegisterAnimation} loop={true}

                    ></Lottie>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold">Please Register!</h1>
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                    <SocialLogin ></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;