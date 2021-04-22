import React from 'react';
import Lottie from 'react-lottie';
import LoadingAnimation from '../assets/loading-animation';

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="rounded-md p-4 max-w-sm w-full mx-auto h-40 mt-16">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
}
