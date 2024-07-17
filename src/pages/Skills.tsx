import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allSkillCategories, initialCategory, SkillCategory } from "./Skills/skills";

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>(initialCategory);

  const iconCategory: { [key: string]: string } = {
    Frontend: '/iconBack.png',
    Backend: '/iconOthers.png',
    Otros: '/icon.png'
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="sm:w-[800px] sm:h-[430px] h-[530px] w-[350px] rounded-[10px] bg-white overflow-hidden flex flex-col shadow-md border-[1px] border-[#1922324d]">
        <ul className="flex pt-0.5 px-0.5 bg-white rounded-t-lg border-b-[1px] border-gray-200">
          {allSkillCategories.map((category) => (
            <li
              key={category.category}
              className={`flex items-center justify-center w-full p-2 cursor-pointer ${category === selectedCategory ? "bg-gray-300 border-b-[1px] border-indigo-500" : "border-transparent"} rounded-t-lg`}
              onClick={() => setSelectedCategory(category)}
            >
              <img src={iconCategory[category.category]} className="size-6 mr-2" alt={category.category} />
              {category.category}
              {category === selectedCategory && (
                <motion.div
                  layoutId="underline"
                />
              )}
            </li>
          ))}
        </ul>
        <main className="flex flex-col justify-center items-center text-5xl grow select-none">
          <div className="flex flex-wrap justify-center items-center">
            <AnimatePresence mode="wait">
              {selectedCategory.skills.map(({icon, label}) => (
                <motion.div
                  key={label}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="m-2 p-2 flex flex-col items-center"
                >
                  <img src={icon} alt={label} className="size-16" />
                  <span className="text-xs">{label}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Skills;
