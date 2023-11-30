"use client"
import React from 'react'
import { CiCircleInfo } from "react-icons/ci";
import { balanceProps } from '@/interfaceHelpers/declarations';
import  RenderLineChart  from '../chart/LineChart';
import useFetchDatas from '@/api/useFetchData';
import {Routes} from "../../config/config"
import sideLogos from "../../../public/asset/app bar.png"
import Image from 'next/image';


const Balance = () => {

    const {data} = useFetchDatas(Routes.GET_USER_WALLET)
    const BalanceIten:balanceProps[]=[
        {
            title:"Ledger Balance",
            icon:  <CiCircleInfo />,
            balance:data? "USD"+" "+data?.ledger_balance:"USD 0"

        },
        {
            title:"Total Payout",
            icon:  <CiCircleInfo />,
            balance:data? "USD"+" "+data?.total_payout:"USD 0"
           

        },
        {
            title:"Total Revenue",
            icon:  <CiCircleInfo />,
        
            balance:data? "USD"+" "+data?.total_revenue:"USD 0"


        },
        {
            title:"Pending Payout",
            icon:  <CiCircleInfo />,
            // balance:"USD" +" "+data?.
            balance:data? "USD"+" "+data?.pending_payout:"USD 0"


        },

    ]
  return (
    <div className='w-[85%] h-[350px] mt-12 flex justify-between '>
        <div className=''>
          <div className='flex w-[550px] justify-between h-[60px]'>
          <div >
                <div  className='text-[10px] mb-2'>
                    Available Balance
                </div>
                <div className='font-bold text-[25px]'>
                USD{" "}{
                    data?.balance
                }
                </div>
            </div>
            <div>
                <button className='w-[180px] text-[#fff] text-[12px] bg-black p-4 rounded-full'>
                    Withdraw
                </button>
            </div>
          </div>
            <div className='w-[750px] h-[250px] mt-6 relative '>
             <RenderLineChart/>
             <div className='w-[700px] h-[1px] bg-[#4848483c] absolute bottom-[20px]'>
<div className='absolute w-[5px] h-[5px] rounded-full bg-[#4848483c] left-[-5px] bottom-[-2px]'>

</div>
<div  className='absolute w-[5px] h-[5px] rounded-full bg-[#4848483c] right-[-5px] bottom-[-2px]'>

</div>
            </div>
            <div className='text-[10px] flex w-[700px] justify-between'>
                <div>April 1, 2023</div>
                <div>
                April 30, 2023
                </div>
            </div>
            </div>
            
        </div>
        <div>

            {
                BalanceIten.map((props:any)=>(
                    <div key={props.title} className='flex w-[250px] m-5'>
                    <div className='flex flex-col w-[100%]'>
                    <div className='flex justify-between text-[10px]'>
                    <span>
                        {props.title}
                        </span>
                        <span>
                      {
                        props.icon
                      }
                        </span>
                    </div>
    
                        <div className='mt-2 font-bold text-[20px]'>
                            {props.balance}
                        </div>
                    </div>
                </div>
                ))
            }
          
           
        
         
        </div>

    <div className='fixed  left-[30px] top-[220px] h-[150px] w-[50px]  rounded-full flex justify-center items-center flex-col'>
      <Image width={100} height={100} src={sideLogos.src} alt=""/>
    </div>
    </div>
  )
}

export default Balance