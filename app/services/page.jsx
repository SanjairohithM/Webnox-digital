"use client"
import { useControls } from 'leva'
import React from 'react'

function page() {
    const {name,aNumber}=useControls({name:"sakthi",aNumber:{
        min:0,max:100,
        step:2,
        value:4
    }})
  return (
    <div>
        name : {name}, number : {aNumber}
    </div>
  )
}

export default page