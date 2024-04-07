
import { Link } from "react-router-dom";
import Shared from "../../Shared/Shared/Shared";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Registration = () => {
    const [error, setError] = useState('')

    const { createUser } = useContext(AuthContext)

    const handleFormSubmit = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoUrl = form.get('url');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name, photoUrl, email, password)
        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage)
            });
    }




    return (
        <div>
            <Shared></Shared>
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-bold">Registration Here</h2>
                <form
                    onSubmit={handleFormSubmit}
                    className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="url" name="url" placeholder="Photo Url " className="input input-bordered" required />
                    </div> */}
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

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div>
                        <p>If you already have an Account?
                            <Link to='/login' className="text-blue-600 underline">
                                Please login here
                            </Link>
                        </p>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;