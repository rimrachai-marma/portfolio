"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProfileImage: React.FC = () => {
  return (
    <div className="relative flex items-center tablet:mx-auto">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-32 h-32 tablet_portrait:w-40 tablet_portrait:h-40 rounded-full bg-teal-500/20 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -12, 0],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.3 },
          scale: { duration: 0.8, delay: 0.3 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative w-24 h-24 tablet_portrait:w-32 tablet_portrait:h-32 rounded-full overflow-hidden"
      >
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
      </motion.div>
    </div>
  );
};

export default ProfileImage;
