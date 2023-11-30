"use client"
import React, {useState} from 'react'
import Logo from "../../../public/asset/logo/mainstack-logo.png"
import Image from 'next/image'
import { Navs } from '@/interfaceHelpers/declarations'
import { GrHomeRounded } from "react-icons/gr";
import { FaMoneyBills } from "react-icons/fa6";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { CiBellOn } from "react-icons/ci";
import { TbMessage } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import ProfileDropDown from '../ProfileDropDOwn/ProfileDropDown'
import useFetchDatas from '@/api/useFetchData'
import {Routes} from "../../config/config"



const Header = () => {

    const[profile, setProfile] = useState(false)

    const {data} = useFetchDatas(Routes.GET_USER_DETAILS)
    console.log(data)


    const showProfileDropDown= ()=>{
        setProfile(prevProfile => !prevProfile);
    }
const Navigations :Navs[]=[

    {
        label:'Home', icon:<GrHomeRounded />
    },
    {
        label:"Analysis", icon:<MdOutlineInsertChartOutlined />
    }, {
        label:"Revenue", icon:<FaMoneyBills /> 
    },
    {
        label:"CRM",icon:<LuUsers2  />
    },
    {
        label:"Apps", icon:<RxDashboard />
    }
]

  return (
    <div className=' w-[98%] mt-2 rounded-full shadow-md '>
{
    profile && <ProfileDropDown first_name={data?.first_name} last_name={data?.last_name} email={data?.email} />
}
        <div className='flex justify-between items-center p-4  '>
           <div > 
            <Image width={20} height={20} src={Logo.src}alt="logo"/>
           </div>
           <div className='flex w-[600px]  justify-center items-center '>
 
            {Navigations?.map((props)=>(
           <div key={props.label} className={` p-2 rounded-full flex justify-center items-center w-[400px] ${props.label==="Revenue"? "bg-[#000]":""} ${props.label==="Revenue"? "text-[#fff]":""}`}>
<span className='flex items-center text-[12px] justify-evenly w-[70px]'>
    <div className=''>
    {props.icon}

    </div>
    <div>
    {props.label}

    </div>
</span>

<span>


</span>
           </div>
            ))
            
            }
       
           </div>
           <div className='flex w-[100px] justify-between text-[13px] items-center #EFF1F6 bg-[#5888899]  '>
            <div>
            <CiBellOn />
            </div>
            <div>
            <TbMessage />
            </div>
            <span className='flex cursor-pointer items-center rounded-full bg-[#EFF1F6] w-[50px]  justify-evenly h-[32px] ' onClick={showProfileDropDown}>
                <div className='bg-[#000] rounded-full text-[#fff] text-[10px] p-[3px]'>
{
    data?.first_name.charAt(0)
}
{
    data?.last_name.charAt(0)
}


                </div>
                <div>
                <RxHamburgerMenu />
                </div>
 
            </span>
           </div>
        </div>
    </div>  
  )
}

export default Header