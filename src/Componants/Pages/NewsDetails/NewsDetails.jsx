// import { useParams } from 'react-router-dom';
import Shared from '../../Shared/Shared/Shared';
import RightSide from '../../Shared/RightSide/RightSide';
import { useParams } from 'react-router-dom';


const NewsDetails = () => {
    const { id } = useParams();
    return (
        <section >
            <Shared></Shared>
            <div className='max-w-[1400px] mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-4'>
                    <div className='md:col-span-3'>
                        <h2 className='text-2xl font-bold'>Dragon News</h2>
                        <p>{id}</p>
                    </div>
                    <div>
                        <RightSide></RightSide>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsDetails;