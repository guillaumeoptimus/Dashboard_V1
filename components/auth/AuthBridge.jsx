"use client";
import React from "react";
export default function AuthBridge(){
  React.useEffect(()=>{
    try{
      const email = localStorage.getItem("optimus_user_email") || "";
      const expires = new Date(Date.now() + 24*60*60*1000).toUTCString();
      document.cookie = `ol_user=${encodeURIComponent(email)}; path=/; expires=${expires}`;
    }catch{}
  },[]);
  return null;
}
