import { useLoaderData } from 'react-router-dom';
import Leftside from '../Shared/LeftSide/Leftside';
import Rightside from '../Shared/RightSide/RightSide';
import Shared from '../Shared/Shared/Shared';
import NewsCard from '../Pages/NewsCard/NewsCard';


const Home = () => {
    const news = useLoaderData();

    return (
        <div className='max-w-[1400px] mx-auto'>
            <Shared></Shared>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div>
                    <Leftside></Leftside>
                </div>
                <div className='md:col-span-2'>
                    {
                        news?.map(aNews => <NewsCard
                            key={aNews._id}
                            news={aNews}
                        ></NewsCard>)
                    }
                </div>
                <div>
                    <Rightside></Rightside>
                </div>
            </div>
        </div>
    );
};

export default Home;