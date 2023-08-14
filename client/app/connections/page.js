'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'

const Connections = () => {
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const id  = searchParams.get('id');
  
  const loggedInUser = useSelector((state)=>state);
  const isAuth = Boolean(loggedInUser.reducer.token);
  const user = loggedInUser.reducer.user;
  console.log(user);
  
  if (!id) {
    return <p>Loading...</p>;
  }

  if (!isAuth) {
    router.push('/');
    return null;
  }
  

  return (
    <div>{user.about}</div>
  )
}

export default Connections;