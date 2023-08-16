'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar';

const Profile = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id  = searchParams.get('id');
  
  const loggedInUser = useSelector((state)=>state);
  const isAuth = Boolean(loggedInUser.reducer.token);

  if (!id) {
    return <p>Loading...</p>;
  }
  
  if (!isAuth) {
    router.push('/');
    return null;
  }

  return (
    <main>
      <Navbar/>
      <div>{id}</div>
      
    </main>
  )
}

export default Profile