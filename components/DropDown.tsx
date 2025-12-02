"use client"

import { useState } from "react"
import React from "react"
interface Props{
    label:string,
    menuItems:string[]
}

// React Syntax
// const DropDown: React.FC<Props> = ({label,menuItems})=>{
//     const [isOpen, setIsOpen] = useState(false);
//     function toggleDropDown(){
//         setIsOpen(!isOpen);
//     }
//     return (
//         <>
//              <div onMouseEnter={toggleDropDown} onMouseLeave={toggleDropDown}>
//                  <a href="#">{label} ^</a>
//                  {isOpen &&
//                  <ul className="absolute w-[100px] bg-amber-100 p-2 items-center">
//                      {menuItems.map(item=>(
//                          <li key={item} className="text-black">{item}</li>
//                      ))}
//                  </ul>
//                  }
//              </div>
//          </>
//     )
// }

// export default DropDown;

// Next js Syntax
function DropDown({label,menuItems}:Props){
    const [isOpen, setIsOpen] = useState(false);
    function toggleDropDown(){
        setIsOpen(!isOpen);
    }
    return (

        <>
            <div onMouseEnter={toggleDropDown} onMouseLeave={toggleDropDown}>
                <a href="#">{label} ^</a>
                {isOpen &&
                <ul className="absolute w-[100px] bg-amber-100 p-2 items-center">
                    {menuItems.map((item,index)=>(
                        <li key={index} className="text-black">{item}</li>
                    ))}
                </ul>
                }
            </div>
        </>
    )
}

export default DropDown