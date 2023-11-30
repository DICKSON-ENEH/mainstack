"use client"
import React , {useState, useRef, useEffect, ChangeEvent}from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { Items } from '@/interfaceHelpers/declarations';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';
// import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css'; 

registerLocale('en-US', enUS);

interface ModalProps {
    onclick: any;
  }

const Filter = ({onclick}:ModalProps) => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEndDate, setIsOpenEndDate] = useState(false);
    const [selectedStartDate, setStartSelectedDate] = useState<any>();
    const [selectedEndDate, setEndSelectedDate] = useState<any>();
    const [isVisible, setIsVisible] = useState(false);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [selectedTransactions, setSelectedTransactions] = useState<string[]>([]);
    const[transactionType, setTransactionType]= useState(false)
    const[transactionStatus, setTransactionStatus]= useState(false)


  
    const handleStartDateChange = (date: Date | null) => {
      setStartDate(date);
      setStartSelectedDate(date);
    };
  const openTranctionType=()=>{
    setTransactionType((prevType)=>!prevType)
  }
  const openTranctionStatus=()=>{
    setTransactionStatus((prevType)=>!prevType)
  }


    const handleEndDateChange = (date: Date | null) => {
      setEndDate(date);
   
    setEndSelectedDate(date);
    };
    const handleIconClick = () => {
        setIsOpen(prevOpen => !prevOpen);
     
setIsOpenEndDate(false)
      }
      const handleIconClickEndDate = () => {
        setIsOpenEndDate(prevOpenEnd =>!prevOpenEnd);
        setIsOpen(false)
     
      }

    const Items :Items[]=[
        {
            text:"Today"
        }
        ,
        {
            text:"Last 7 days"
        },
        {
            text:"This month"
        },
        {
            text:"Last 3 months"
        },
        {
            text:"This year"
        },
        {
            text:"Last Year"
        },
        {
            text:"All time"
        },
    ]
    const checkboxItems=[
        {
            text:"Store transactions"
        }
        ,
        {
            text:"Get tipped"
        },
        {
            text:"Withdrawals"
        },
        {
            text:"Chargebacks"
        },
        {
            text:"Cashbacks"
        },
        {
            text:"Refer & earn"
        }
    ]
    const transactionStatusBox=[
        {
            text:"Successful"
        }
        ,
        {
            text:"Pending"
        },
        {
            text:"Failed"
        },
       
    ]
    const storedItems = localStorage.getItem('selectedItems');
    const initialSelectedItems: string[] = storedItems ? JSON.parse(storedItems) : [];
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
    
        if (checked) {
          setSelectedItems((prevSelectedItems) => [...prevSelectedItems, name]);
        } else {
          setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.filter((item) => item !== name)
          );
        }
      };
      const handleTransactionChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
    
        if (checked) {
          setSelectedTransactions((prevSelectedItems) => [...prevSelectedItems, name]);
        } else {
          setSelectedTransactions((prevSelectedItems) =>
            prevSelectedItems.filter((item) => item !== name)
          );
        }
      };
      localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    const formattedDate = selectedStartDate ? format(selectedStartDate, 'MMMM d, yyyy') : 'start Date';
    const formattedEndDate = selectedEndDate
    ? format(selectedEndDate, 'MMMM d, yyyy')
    : 'End Date';
    const CustomInput = ({ value, onClick }:any) => (
        <div onClick={handleIconClick}  className={`text-[12px] text-[#191919] flex items-center w-[200px] p-2 rounded-lg justify-around cursor-pointer ${
            isOpen ? 'bg-white' : 'bg-[#EFF1F6]'
          }  ${isOpen?"shadow-sm":"shadow-sm"}`}>

       <span>
       {
            formattedDate? formattedDate:"Start Date"
         }
       </span>
       {
        isOpen?(<MdKeyboardArrowUp className="icon"  onClick={handleIconClick}/>):(<MdKeyboardArrowDown className="icon"  onClick={handleIconClick}/>)
       }


        </div>
      );
      const CustomEndInput = ({ value, onClick }:any) => (
        <div onClick={handleIconClickEndDate}  className={`text-[12px] text-[#191919] flex items-center w-[200px] p-2 rounded-lg justify-around cursor-pointer ${
            isOpenEndDate ? 'bg-white' : 'bg-[#EFF1F6]'
          }  ${isOpenEndDate?"shadow-sm":"shadow-sm"}`}>

       <span>
       {
            formattedEndDate? formattedEndDate:"Start Date"
         }
       </span>
       {
        isOpenEndDate?(<MdKeyboardArrowUp className="icon"  onClick={handleIconClickEndDate}/>):(<MdKeyboardArrowDown className="icon"  onClick={handleIconClickEndDate}/>)
       }


        </div>
      );

      useEffect(() => {
          
          const timer = setTimeout(() => {
              setIsVisible(true);
          }, 100);
          return () => clearTimeout(timer);
      }, []);
      const handleInnerClick = (event: React.MouseEvent) => {
        event.stopPropagation();
      };
   
  return (
<div  className={`h-[100vh] bg-[#51515171] w-[100%] top-0 left-0 flex justify-end p-1 z-50 fixed `}>
        <div       className={`bg-[#fff] w-[450px] z-50 h-[555px] flex flex-col justify-between rounded-lg shadow-lg p-4 ${
        isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-full'
      } transition-transform duration-1000 ease-in-out`}>
            <div>
            <div className='flex justify-between'>
                <div className='font-bold'>
                    Filter
                </div>
                <div className='cursor-pointer' onClick={onclick}>
                <IoCloseOutline />
                </div>
            </div>
            <div className='flex justify-between mt-6 text-[11px] w-[100%] overflow-x-auto invisible-scrollbar'> 
            <div className='flex space-x-4 scrollbar-hide'>
        {Items.map((props: any) => (
            <div key={props.title} className='w-[95px] flex justify-center rounded-full border border-black-600 p-2 cursor-pointer'>
                {props.text}
            </div>
        ))}
    </div>
            </div>
            <div className='mt-6'>
                <div className='text-[14px] mb-2'>
                    Date Ranges
                </div>
                <div  className='flex justify-between'>
   <div>
<div className="date-picker-container">
<DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        customInput={<CustomInput />}
        dateFormat="MMMM d, yyyy"
        locale="en-US"
        className="custom-datepicker"
        open={isOpen}
        onClickOutside={() => setIsOpenEndDate(false)}
      />

</div>

   </div>
   <div className="date-picker-container">
   <DatePicker 
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="End Date"
        dateFormat="MMMM d, yyyy"
        locale="en-US"
        open={isOpenEndDate}
        className="custom-datepicker"
        onClickOutside={() => setIsOpenEndDate(false)}
        customInput={<CustomEndInput value={formattedEndDate} onClick={handleIconClickEndDate} />}
      />


   </div>
                </div>

                <div>
                    <div className='mt-4 text-[12px] font-bold'>
                        Transaction Type
                    </div>
                    <div>
                    <div onClick={openTranctionType}  className={`relative cursor-pointer text-[9.5px] mt-2 mb-2 p-2 h-[40px] ${transactionType? 'bg-[#fff]':'bg-[#d8d8d851]'}  ${transactionType? 'shadow-md':''} rounded-lg flex items-center justify-center`}>{selectedItems.join(', ')} <span className='ml-2 absolute right-2'>
                        
                        {
                            transactionType? <MdKeyboardArrowUp className="icon"/> : <MdKeyboardArrowDown className="icon"/>
                        }
                       </span></div>
                    </div>
                    {
                        transactionType &&   <div className='w-[200px] h-[200px] bg-[#fff] shadow-lg rounded-md p-4 absolute z-10'>
                        {
                            checkboxItems.map((props:any)=>(
                                <div key={props.text} className='text-[10px] flex h-[30px] items-center ' >
                                  
                                                <input      onChange={handleCheckboxChange}  className="form-checkbox text-[#CF0558] mr-2 border-[#CF0558]  focus:ring-[#CF0558] checked:bg-[#CF0558] checked:border-transparent !important" type="checkbox" name={props.text} value={props.text}
                                                checked={selectedItems.includes(props.text)}
                                                />
                                                <label  className=''>
                                        {props.text}
                                    </label>
                        
                                </div>
                            ))
                        }
                                            </div>
                    }
                  
                </div>
                <div>
                    <div className='mt-4 text-[12px] font-bold'>
                        Transaction Status
                    </div>
                    <div>
                    <div onClick={openTranctionStatus}  className={`relative cursor-pointer text-[9.5px] mt-2 mb-2 p-2 h-[40px] ${transactionStatus? 'bg-[#fff]':'bg-[#d8d8d851]'}  ${transactionStatus? 'shadow-md':''} rounded-lg flex items-center justify-center`}>{selectedTransactions.join(', ')} <span className='ml-2 absolute right-2'>
                        
                        {
                            transactionStatus? <MdKeyboardArrowUp className="icon"/> : <MdKeyboardArrowDown className="icon"/>
                        }
                       </span></div>
                    </div>
                    {
                     transactionStatus &&   <div className='w-[200px] h-[110px] bg-[#fff] shadow-lg rounded-md p-4'>
                        {
                            transactionStatusBox.map((props:any)=>(
                                <div key={props.text} className='text-[10px] flex h-[30px] items-center ' >
                                  
                                                <input      onChange={handleTransactionChange}  className="form-checkbox text-[#CF0558] mr-2 border-[#CF0558]  focus:ring-[#CF0558] checked:bg-[#CF0558] checked:border-transparent !important" type="checkbox" name={props.text} value={props.text}
                                                checked={selectedTransactions.includes(props.text)}
                                                />
                                                <label  className=''>
                                        {props.text}
                                    </label>
                        
                                </div>
                            ))
                        }
                                            </div>
                    }
                  
                </div>

             
            </div>
            </div>
          
              <div className='flex justify-between text-[14px]'>
                    <button className='w-[200px]  bg-white text-[#000] rounded-full border border-[#000]' onClick={onclick}>Cancel</button>
                    <button className='w-[200px] bg-black rounded-full text-[#fff] p-3'>Apply</button>
                </div>
        </div>
    </div>
  )
}

export default Filter