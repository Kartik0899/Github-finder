import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Navbar({ title }) {
    return (
        <nav className='navbar shadow-lg bg-[#191d24] text-neutral-content'>
            <div className='container mx-auto flex justify-center items-center h-16'>
                <div className='flex-none px-2 mx-2'>
                    <FaGithub className='inline pr-2 text-3xl' />
                    <a href='/' className='text-lg font-bold align-middle text-[#a6adbb]'>
                        {title}
                    </a>
                </div>

                <div className='flex-1 px-2 mx-2'>
                    <div className='flex justify-end'>
                        <div className='flex justify-around w-[10%]'>

                            <a href='/' className='btn btn-ghost btn-sm rounded-btn hover:bg-[#353a42] text-[#a6adbb] mr-4'>
                                Home
                            </a>
                            <a href='/about' className='btn btn-ghost btn-sm rounded-btn hover:bg-[#353a42] text-[#a6adbb]'>
                                About
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar
