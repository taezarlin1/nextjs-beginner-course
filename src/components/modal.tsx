"use client"
import { useRouter } from "next/router";
import React, { useCallback, useRef, useEffect, MouseEventHandler } from "react";


export default function Modal({children}:{children: React.ReactNode}){
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();

    const onDismiss = useCallback(()=>{
        router.back()
    }, [router])

    const onClick: MouseEventHandler = useCallback(
        (e)=>{
            if (e.target === overlay.current || e.target === wrapper.current){
                if(onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper]
    )
}