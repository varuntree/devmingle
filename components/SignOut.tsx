"use client"
import React from 'react';
import { auth } from '../lib/firebase';

const SignOut: React.FC = () => {
  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <button onClick={signOut}>Sign Out</button>
  );
};

export default SignOut;