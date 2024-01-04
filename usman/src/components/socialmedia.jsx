import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
const SocialMediaIcons = () => {
  const openSocialMedia = (platform) => {
    // Replace the URLs with your social media profile links
    const socialMediaLinks = {
      github: 'https://usmanalfaki-1nwv.vercel.app/',
      twitter: 'https://x.com/usman_alfaki?s=20',
      instagram: 'https://www.instagram.com/u.abdulkadiir',
      linkedin: 'https://www.linkedin.com/in/usman-abdulkadir-079344299/',
    };

    window.open(socialMediaLinks[platform], '_blank');
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex space-x-4 ">
        <div  onClick={() => openSocialMedia('facebook')}>
          <FaGithub className='lg:mx-10 cursor-pointer md:mx-5' size={30} />
        </div>
        <div  onClick={() => openSocialMedia('twitter')}>
          <FaXTwitter className='lg:mx-10 cursor-pointer md:mx-5' size={30} />
        </div>
        <div  onClick={() => openSocialMedia('instagram')}>
          <FaInstagram className='lg:mx-10 cursor-pointer md:mx-5' size={30} />
        </div>
        <div  onClick={() => openSocialMedia('linkedin')}>
          <FaLinkedin className='lg:mx-10 cursor-pointer md:mx-5' size={30} />
        </div>
      </div>
    </div>
  );
};



export default SocialMediaIcons;