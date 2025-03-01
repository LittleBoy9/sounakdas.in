"use client"

import React from 'react';
import Lottie from "lottie-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const AnimationLottie = ({ animationPath, width }: any) => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationPath,
      style: {
        width: '95%',
      }
    };
  
    return (
      <Lottie {...defaultOptions} />
    );
  };
  
  export default AnimationLottie;