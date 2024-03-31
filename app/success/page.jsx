"use client"
import { useRouter } from 'next/navigation'


import { useState, useEffect } from "react";

export default function Success() {
  const router = useRouter();

  return (
    <div className="bg-white rounded-lg w-1/3 font-latoRegular text-gray-700 p-16">
    <h1 className="text-3xl pb-4 font-latoBold">
        Thanks for the email  ✨
    </h1>
    <p className="text-lg  text-gray-500">
        We have sent you an email over at. We will get
        back to you as soon as we can!
    </p>
    </div>
  );
}