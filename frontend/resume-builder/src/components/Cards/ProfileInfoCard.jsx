import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
const ProfileInfoCard =()=>{
    const {user,clearUser}=useContext(UserContext);
    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.clear();
        clearUser();
        navigate("/")
    };
    return user && (
        // <div>ProfileInfoCard</div>
        <div className='flex items-center'>
            <img src={user.profileImageUrl}
            alt=""
            className='w-11 h-11 bg-gray-300 rounded-full mr-3'/>
            <div className='text-[15px font-bold leading-3'>{user.name || ""}</div>
            <button className='text-purple-500 text-sm font-semibold cursor-pointer hover:underline'
            onClick={handleLogout}
            >Logout</button>
        </div>
    )
}
export default ProfileInfoCard;