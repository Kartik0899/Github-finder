import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import logo from '../images/Github.png';
import { useNavigate } from 'react-router-dom';

const UserSearch = () => {
    const navigate = useNavigate();


    const [text, setText] = useState('');
    // console.log('search text', text);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/user/${text}`);
    }

    return (
        <>
            <div className='flex justify-center items-center flex-col'>

                <img src={logo} alt="github logo png" className='w-[250px]' />

                <h1 className='text-4xl text-white my-10 font-bold'>Find your Profile</h1>

                <div className='w-[50%] mx-auto grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='form-control'>
                                <div className='relative'>
                                    <input
                                        type='text'
                                        className='w-full pr-40 bg-gray-200 input input-lg text-black'
                                        placeholder='Search'
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                    />
                                    <button
                                        type='submit'
                                        className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                                    >
                                        Go
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserSearch