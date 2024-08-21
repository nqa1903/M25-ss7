"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function ProductPage() {
    const searchParam = useSearchParams();
    const idProduct = searchParam.get("id");
    const namePropduct = searchParam.get("name");
    console.log(idProduct);
    console.log(namePropduct);
    
  return (
    <div>
      Trang danh sách sản phẩm
        <p>Sản phẩm có id : {idProduct}</p>
    </div>
  )
}
