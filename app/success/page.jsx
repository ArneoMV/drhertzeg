"use client"
import './_success.scss'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from "react";

export default function Success() {
  const router = useRouter();

  return (
    
    <div className="success">
      <div className="successModal">
      <h2 className="">Poruka Uspješno Poslana  📬</h2>
      <p className="">Hvala vam na vašoj poruci! Vaš upit je uspješno poslan i naš tim će vam se javiti uskoro.</p>
      </div>
    </div>
  );
}