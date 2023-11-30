import Balance from '@/components/Balance/Balance'
import Header from '@/components/Header/Header'
import Transaction from '@/components/Transactions/Transaction'
import Image from 'next/image'

export default function Home() {
  return (
   <div className='flex flex-col items-center justify-center w-[100%] relative'>
    <Header/>
    <Balance/>
    <Transaction/>
   </div>
  )
}
