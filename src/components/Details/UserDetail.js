import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { CgCalendarDates } from "react-icons/cg";

const UserDetail = () => {
    const { username } = useParams();
    // console.log('username', username);

    const [userData, setUserData] = useState({})
    console.log('userData', userData);

    const apiResponse = async () => {
        const resp = await fetch(`https://api.github.com/users/${username}`)
        const data = await resp.json()
        setUserData(data)
    }

    useEffect(() => {
        apiResponse();
    }, [username])

    return (
        <>
            <div className='flex flex-col items-center'>
                <img src={userData.avatar_url} alt={userData.login} className='rounded-full w-48 h-48' />
                <h1 className='text-5xl font-medium uppercase text-[#e3f6f5] mb-6'>{userData.name}</h1>
                <a href={userData.html_url} target='_blank' className='text-xl text-[#e3f6f5] font-semibold mb-4'>@{userData.login}</a>

                <div className='flex text-xl text-[#97ead2]'>
                    <p className='flex justify-center items-center m-2'>
                        <IoLocationOutline />
                        <span className='ml-2'>{userData.location}</span>
                    </p>
                    <p className='flex justify-center items-center m-2'>
                        <CgCalendarDates />
                        <span className='ml-2'>
                            joined{" "}
                            {new Date(userData.created_at).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </span>
                    </p>
                </div>


                <div className='flex'>
                    <div className='flex justify-center items-center flex-col bg-[#e3f6f5] text-black p-4 rounded-md m-4'>
                        <h2 className='text-2xl'>{userData.followers}</h2>
                        <p>Followers</p>
                    </div>
                    <div className='flex justify-center items-center flex-col bg-[#e3f6f5] text-black p-4 rounded-md m-4'>
                        <h2 className='text-2xl'>{userData.public_repos}</h2>
                        <p>Repositories</p>
                    </div>
                    <div className='flex justify-center items-center flex-col bg-[#e3f6f5] text-black p-4 rounded-md m-4'>
                        <h2 className='text-2xl'>{userData.following}</h2>
                        <p>Following</p>
                    </div>
                </div>


            </div>
        </>
    )
};

export default UserDetail;
