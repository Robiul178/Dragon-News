import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSide = () => {
    return (
        <div>
            <div>
                <h2 className="text-xl font-bold mb-4">Login with</h2>
                <button className="btn btn-outline w-full btn-secondary">
                    <FcGoogle />
                    Log in with Google
                </button> <br /> <br />
                <button className="btn w-full btn-outline btn-ghost">
                    <FaGithub />
                    Log in with Github
                </button>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold mb-4">Find us On</h2>
                < button className="btn btn-outline w-full">
                    <span> <FaFacebook /></span>
                    Facebook
                </button> <br />
                < button className="btn btn-outline w-full">
                    <FaTwitter />
                    Twiteer
                </button><br />
                < button className="btn btn-outline w-full">
                    <FaInstagram />
                    Instergram
                </button>
            </div>
            <div>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div >
    );
};

export default RightSide;