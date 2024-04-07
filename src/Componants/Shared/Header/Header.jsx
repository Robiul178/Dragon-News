import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center py-4'>
            <img src={logo} className='mx-auto' />
            <p className='text-xl'>
                {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </p>
            <h2>Journalism without fear</h2>
        </div>
    );
};

export default Header;