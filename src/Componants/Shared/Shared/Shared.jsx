import BreakingNews from "../../BreakingNews/BreakingNews";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Shared = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
        </div>
    );
};

export default Shared;