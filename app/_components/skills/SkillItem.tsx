import Image from "next/image";

import { Skill } from "@/types/index";

interface Props {
  skill: Skill;
}

const SkillItem: React.FC<Props> = ({ skill }) => {
  return (
    <>
      <li className="flex items-center gap-2 px-3 py-1.5 rounded-full dark:bg-white/5 border border-gray-300 dark:border-gray-600">
        <Image width={16} height={16} src={skill.icon} alt={skill.title} />
        <span className="text-xs text-gray-800 dark:text-gray-400">
          {skill.title}
        </span>
      </li>
    </>
  );
};

export default SkillItem;
