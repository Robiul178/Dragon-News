import Marquee from "react-fast-marquee";

const BreakingNews = () => {

    return (
        <div className="flex p-2 bg-gray-200 border my-4">
            <button className="btn bg-red-500">Latest News</button>
            <Marquee>
                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet | Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine | Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine
            </Marquee>
        </div>
    );
};

export default BreakingNews;