import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import auth from "../../firebase/firebase.config";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut(auth)
            .then(() => {

            }).catch(() => {
            });
    }


    const links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-slate-500" : ""
                }
            >
                HOME
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                About
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/carrer"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Carrer
            </NavLink>
        </li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <div className="avatar online placeholder">
                        <div className="bg-neutral text-neutral-content rounded-full w-16">
                            <span className="text-xl">R</span>
                        </div>
                    </div>

                    <div>
                        {
                            user ?
                                <button
                                    onClick={handleLogOut}
                                    className="btn btn-secondary w-[3rem">Log Out</button>
                                :
                                <Link to='/login'>
                                    <button className="btn btn-secondary w-[3rem">Log In</button>
                                </Link>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;