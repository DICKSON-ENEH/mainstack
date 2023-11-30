"use client"
import React, {useState} from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import Filter from '../Filter/Filter';
import useFetchDatas from '@/api/useFetchData';
import {Routes}from "../../config/config"
import moment from "moment"


const Transaction = ({onclick}:any) => {
const [openFilter, setOpenFilter] = useState(false)
const {data} = useFetchDatas(Routes.GET_USER_TRANSACTIONS)
console.log(data)

const OpenFilter =()=>{
    setOpenFilter(!openFilter)
}

const closeFilter =(event: React.MouseEvent)=>{
    event.stopPropagation();

    setOpenFilter(false)
    // onclick()

}
const handleInnerClick = (event: React.MouseEvent) => {
  };

  return (
  <div className='w-[85%] flex flex-col p-4 '>
    {
        openFilter && <Filter onclick={closeFilter}/>
    }
    <div className='flex justify-between w-[100%]'>
        <div>
        <div className='font-bold text-[17px]'>
            {data?.length} Transactions
        </div>
        <div className='text-[10px]'>
            Your Transaction for the last 7 days
        </div>
        </div>
        <div className='flex w-[210px] justify-between font-[600]'>
            <div className='bg-[#EFF1F6] rounded-full flex items-center w-[100px] text-[10px] justify-center cursor-pointer' onClick={OpenFilter}>
                <span>
                    Filter
                    </span> 
                    <span className='ml-1'>
                    <MdKeyboardArrowDown   />

                    </span>
            </div>
            <div className='bg-[#EFF1F6] rounded-full flex items-center w-[100px] text-[10px] justify-center cursor-pointer'>
          <span>
          Export List
            </span> <span className='ml-1'>
            <HiOutlineDownload />
            </span>
            </div>
        </div>
    </div>
    <div className='w-[100%] h-[1px] bg-slate-200 mt-8'>

    </div>

   {
    data?.map((props:any)=>(
        <>
         <div className='flex justify-between mt-6'>
    
    <>
      <div className='flex items-center'>
              {
                props?.type ==="deposit"? (
                    <div className='w-[30px] h-[30px] bg-[#E3FCF2] rounded-full flex justify-center items-center'>
                  
                  <GoArrowDownLeft color='#075132' />
              </div>
                ):(
                    <div className='w-[30px] h-[30px] bg-[#F9E3E0] rounded-full flex justify-center items-center'>
                  
                  <GoArrowUpRight color='#961100' />
              </div>
                )
              }
              <div className='ml-2'>
                  <div className='text-[12px]'>
                  {props?.metadata? props?.metadata?.product_name:"Cash Withdrawal"
                  
                
                }

                  </div>
                  <div className='text-[10px] mt-1'>
                      {props?.metadata? props.metadata.name: <span className='text-[#0EA163]'>
                       {props.status}

                      </span>}
                  </div>
              </div>
          </div>
  
          <div className='text-right text-[12px]'>
              <div className='font-bold'>
                  USD {" "} {props.amount}
              </div> 
              <div>
             {
moment(props.data).format("MMMM, Do, YYYY")
             }
              </div>
          </div>
    </> 
  
            
          
       
      </div>
        </>
    ))
   }
  
    
  </div>
  )
}

export default Transaction