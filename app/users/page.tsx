"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

export default function User() {
    const [inputNameValue , setInputNameValue] = useState("");
    const [inputAgeValue , setInputAgeValue] = useState("");
    const route = useRouter();
    const searchParam = useSearchParams();
    const nameValue = searchParam.get("name");
    const ageValue = searchParam.get("age");
    const inputName = (event:React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setInputNameValue(value);
    }
    const inputAge = (event:React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setInputAgeValue(value);
    }
    const handleClick = () =>{
        route.push(`/users?name=${encodeURI(inputNameValue)}&age=${encodeURI(inputAgeValue)}`)
    }
  return (
    <div>
        User name : {nameValue} <br />
        Age : {ageValue} 
        <br />
      <input type="text" placeholder='Tìm kiếm theo tên' onChange={inputName}/>
      <input type="text" placeholder='Tìm kiếm theo tuổi' onChange={inputAge}/>
      <button onClick={handleClick}>Tìm kiếm</button>
    </div>
  )
}
