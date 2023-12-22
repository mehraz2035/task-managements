
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";




const Login = () => {

    const { signIn, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.form?.pathname || "/";


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate(from, {replace: true });
            })
            .catch(error => console.log(error));
    }
    return (

        
        <div className="hero min-h-screen bg-base-200">
           
            <div className="hero-content flex-col lg:flex-row  ">
                <div className="text-center lg:text-left w-1/2  lg:mr-32 ">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-registration-4487137-3726287.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <h1 className="text-3xl font-bold">Login now</h1>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="text-center mb-6">Dont have an account? <Link className="text-orange-600" to="/signup">Sign Up</Link></p>
                    <div className="flex justify-center mb-7">
                        <button onClick={googleLogin} className=" btn text-xl  flex items-center gap-2"><p>Google</p><img className="w-6 h-6  " src="https://i.ibb.co/tKWsFHK/Google-G-Logo-svg.webp" alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;