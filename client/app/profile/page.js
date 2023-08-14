'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Profile = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id  = searchParams.get('id');
  
  const loggedInUser = useSelector((state)=>state);
  const isAuth = Boolean(loggedInUser.reducer.token);
  const user = loggedInUser.reducer.user;
  
  //console.log(loggedInUser);

  if (!id) {
    return <p>Loading...</p>;
  }

  if (!isAuth) {
    router.push('/');
    return null;
  }
  

  return (
    <main>
      <div>{id}</div>
      {/* <div onClick={router.push(`/connections?id=${id}`)}>Connections</div> */}
      <Link href={`/connections?id=${id}`}>Connections</Link>
    </main>
  )
}

export default Profile