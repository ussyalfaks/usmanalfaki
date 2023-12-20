import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
const SocialMediaIcons = () => {
  const openSocialMedia = (platform) => {
    // Replace the URLs with your social media profile links
    const socialMediaLinks = {
      github: 'https://www.github.com/your-facebook-profile',
      twitter: 'https://twitter.com/your-twitter-profile',
      instagram: 'https://www.instagram.com/your-instagram-profile',
      linkedin: 'https://www.linkedin.com/in/your-linkedin-profile',
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