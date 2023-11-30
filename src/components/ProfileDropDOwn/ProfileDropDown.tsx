import React from 'react'
import {Navs} from "@/interfaceHelpers/declarations"
import { SlSettings } from "react-icons/sl";
import { MdOutlineReceiptLong } from "react-icons/md";
import { TfiGift } from "react-icons/tfi";
import { AiOutlineAppstore } from "react-icons/ai";
import { VscBug } from "react-icons/vsc";
import { BiSolidUserAccount } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";
import { profileProps } from '@/interfaceHelpers/declarations';



const ProfileDropDown = ({first_name, last_name, email}:profileProps) => {


    const ProfileNavs :Navs[]=[
        { 
            label:"Settings", icon:<SlSettings />
        },
        {
            label:"Purchase History", icon:<MdOutlineReceiptLong />
        },
        {
            label:"Refer and Earn", icon:<TfiGift />
        },
        {
            label:"Integrations", icon:<AiOutlineAppstore />
        },
        {
            label:"Report Bug", icon:<VscBug />
        },
        {
            label:"Switch Account", icon:<BiSolidUserAccount />
        },
        {
            label:"Sign Out", icon:<IoIosLogOut />
        },
    ]
  return (
    <div className='z-10 w-[300px] p-4 h-[385px] absolute right-[30px] top-[90px] shadow-xl bg-white rounded-lg'>
        <div>
            <div className='flex items-center mt-2'>
                <div className='w-[30px] h-[30px] bg-black rounded-full text-[#fff] flex justify-center items-center text-[12px]'>
                    {first_name.charAt(0)}
                    {last_name.charAt(0)}
                </div>
                <div className='text-[12px] ml-2'>
                    <div className='font-bold mb-1'>
                    <span>
                        {first_name}
                    </span>
                    <span>
                        {" "}
                    </span>
                    <span>
                        {last_name}
                    </span>
                    </div>
                    <div className='text-[10px]'>
                      {email}
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between h-[280px] mt-6 text-[13px] '>
                {
                    ProfileNavs.map((props:any)=>(
                        <div key={props.label} className='flex items-center'>
                      <span>
                        {props.icon}
                        </span>  
                        <span className='ml-2'>
{
    props.label
}
                        </span>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ProfileDropDown