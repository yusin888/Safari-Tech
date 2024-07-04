"use client";
import React from 'react'
import { useEffect, useState } from 'react';

interface Startup {
  _id: string;
  name: string;
  field: string;
  headquarters: string;
  founded: string;

}

const startup_profile = () => {
    const [startups, setStartups] = useState<Startup[]>([]);

    useEffect(() => {
      const fetchStartups = async () => {
        const res = await fetch('http://localhost:8000/startups');
        const data: Startup[] = await res.json();
        setStartups(data);
      };
  
      fetchStartups();
    }, []);

  return (
    <div>startup_profile</div>
  )
}

export default startup_profile