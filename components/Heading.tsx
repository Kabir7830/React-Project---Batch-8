"use client"
import React from "react"

interface HeadingProps{
    children:React.ReactNode,
    variant?: "primary" | "secondary" | "danger"
}

function Heading({children, variant,className,...rest}:any){

    let styles = "";
    switch (variant){
        case "primary":
            styles = "bg-green-400 text-white";
            break;
        case "secondary":
            styles = "bg-gray-400 text-white";
            break;
        case "danger":
            styles = "bg-red-400 text-white";
            break;
        default:
            styles = "bg-black text-white";
            break;

    }

    return (
        <>
            <h2 className={`${styles} ${className} text-center`} {...rest}>
                {children}
            </h2>
        </>
    )
}
function Heading2({children, variant,...rest}:HeadingProps){

    let styles = "";
    switch (variant){
        case "primary":
            styles = "bg-green-400 text-white";
            break;
        case "secondary":
            styles = "bg-gray-400 text-white";
            break;
        case "danger":
            styles = "bg-red-400 text-white";
            break;
        default:
            styles = "bg-black text-white";
            break;

    }

    return (
        <>
            <h1 className={`${styles} text-center`}>
                {children}
            </h1>
        </>
    )
}

export{
    Heading,
    Heading2
}