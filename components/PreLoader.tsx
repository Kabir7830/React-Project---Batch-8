"use client"
import { useEffect } from "react";
import { preload } from "react-dom";
import '../app/custom.css'
export default function PreLoader(){
    
    // hidePreLoader();
    useEffect(()=>{
        const hidePreLoader = ()=>{
            const preloader = document.getElementById('preloader');
            if (preloader){
                preloader.classList.add('hide-preloader');
            }
        };
        
        document.addEventListener('DOMContentLoaded ',()=>{
            console.log('event fired');
            hidePreLoader();
        });
        hidePreLoader();

        return()=>{
            document.removeEventListener('DOMContentLoaded',()=>{
                hidePreLoader();
            })
        }

    },[])

    return (
        <>
        <div className="w-full text-center fixed top-0 left-0 h-full flex items-center justify-center bg-black z-[9999999]" id="preloader">
            <h2 className="text-white">Loading....</h2>
        </div>
        </>
    )
}
