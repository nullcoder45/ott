import React from 'react';

export default function Ero() {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <h2 className='mt-4'>मरती टैम दिख'री काली </h2>
      <video width="100%" height="auto" controls autoPlay muted>
        <source src="https://media.stage.in/adsImages_NC/bbb_hr_teaser.mp4" type="video/mp4" />
      </video>
      <button className='bg-green-500 hover:bg-green-700  font-bold py-2 px-4 rounded-md w-4/5'>ट्रायल शुरू करें</button>
    </div>
  );
}