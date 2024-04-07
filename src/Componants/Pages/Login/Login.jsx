
import { Link, useLocation, useNavigate } from "react-router-dom";
import Shared from "../../Shared/Shared/Shared";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const [login, setLogin] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { singInUser } = useContext(AuthContext);

    console.log('from login', location)

    const handleFormSubmit = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        // console.log(email, password)
        singInUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('login', user);
                setLogin('Login SucessFully');


                //navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <div>
            <Shared></Shared>
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-bold">Please Log in </h2>
                <form
                    onSubmit={handleFormSubmit}
                    className="card-body">
                    <div className="form-control">
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div>
                        <p>If you do not have an Account?
                            <Link to='/registration' className="text-blue-600 underline">
                                Please register here
                            </Link>
                        </p>
                        {login}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;