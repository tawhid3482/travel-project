import { useEffect, useState } from "react";

const UseHook = () => {

    const [ data , setData ]=useState()
    useEffect(()=>{
        fetch('/visit.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return [data]
};

export default UseHook;