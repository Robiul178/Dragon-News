import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex p-2 bg-gray-200 border my-4">
            <button className="btn bg-red-500">Latest News</button>
            <Marquee>
                <span className="text-2xl font-semibold">React Marquee</span>  I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;