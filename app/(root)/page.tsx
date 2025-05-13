import React from 'react';
import { Metadata } from 'next';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home= () => {

    const loggedIn = {firstName:'banti'}
  return (
    <div>
      <section className='home'>Home</section>
      <HeaderBox
        type="greeting"
        title="Welcome"
        user={loggedIn?.firstName||'Guest'}
        subtext="Access and manage your account and transactions efficiently"
      />

      <TotalBalanceBox 
        accounts = {[]}
        totalBanks= {3}
        totalCurrentBalance={1250.34}
        

      />
    </div>
  );
}