"use client"

import { useEffect, useState } from "react";
import axios from "axios"





const useFetchDatas = (url:any) => {
  const [fetching, setFectching] = useState(false)
  const [data, setData] = useState<any>(null)

  useEffect(()=>{
    const fetchAllLinks = async () => {
        setFectching(true)
            return await axios
              .get(url)
              .then((res) => {
                console.log(res.data)
                setData(res.data)
             setFectching(false)
               
                return res.data
              }).catch((err:any)=>{
        
              });
          };
        fetchAllLinks()
        
  }, [url])

  return {fetching , data};
 
};

export default useFetchDatas;
