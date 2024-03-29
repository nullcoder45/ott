import React from 'react';

export default function Ero() {
  const redirectToPayments = () => {
    window.location.href = 'https://pay.stage.in/';
  };

  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <h2 className='mt-4 lg:px-20'>मरती टैम दिख'री काली</h2>
      <video className='lg:w-3/4' width="100%" height="auto" controls autoPlay muted>
        <source src="https://media.stage.in/adsImages_NC/bbb_hr_teaser.mp4" type="video/mp4" />
      </video>
      <button
        className='bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded-md w-full lg:w-3/5 lg:px-7 lg:py-7'
        onClick={redirectToPayments}
      >
        ट्रायल शुरू करें
      </button>
    </div>
  );
}