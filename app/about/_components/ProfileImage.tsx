"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProfileImage: React.FC = () => {
  return (
    <div className="relative w-24 h-24 tablet_portrait:w-32 tablet_portrait:h-32 rounded-full overflow-hidden mr-4 tablet:mr-12">
      <Image
        className="absolute h-full w-full top-0 left-0 object-cover"
        src="/images/profile.png"
        fill
        priority
        alt="Rimrachai Marma"
      />

      <motion.svg
        className="w-full h-full absolute top-0 left-0"
        fill="transparent"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="60"
          cy="60"
          r="58.5"
          stroke="#00a99d"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            strokeDasharray: "12 5 0 0",
          }}
          animate={{
            strokeDasharray: [
              "7.5 60 12.5 12.5",
              "8 12.5 46 36",
              "2 125 11 11",
            ],
            rotate: [120, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default ProfileImage;
