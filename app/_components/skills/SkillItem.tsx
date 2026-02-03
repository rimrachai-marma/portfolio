"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Skill } from "@/types/index";

interface Props {
  skill: Skill;
}

const SkillItem: React.FC<Props> = ({ skill }) => {
  return (
    <motion.li
      className="flex items-center gap-2 px-3 py-1.5 rounded-full dark:bg-white/5 border border-gray-300 dark:border-gray-600"
      whileHover={{
        scale: 1,
        y: -4,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
        <Image width={16} height={16} src={skill.icon} alt={skill.title} />
      </motion.div>
      <span className="text-xs text-gray-800 dark:text-gray-400">
        {skill.title}
      </span>
    </motion.li>
  );
};

export default SkillItem;
