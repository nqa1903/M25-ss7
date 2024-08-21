"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

export default function Post() {
    const [inputValue, setInputValue] = useState("");
    const route = useRouter();
    const searchParam = useSearchParams();
    const value = searchParam.get("search");
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setInputValue(value);
    }
    const handleClick = () => {
        route.push(`/posts?search=${encodeURIComponent(inputValue)}`)
    }
  return (
    <div>
        Search Value : {value}
        <br />
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Tìm kiếm</button>
    </div>
  )
}
