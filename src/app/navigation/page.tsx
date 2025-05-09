"use client";
import { useAtom } from "jotai";
import { tabAtom } from "./atom";
import { motion, AnimatePresence } from "framer-motion";
import React from "../../../public/reactIcon.svg.webp";
import TypeScript from "../../../public/tsIcon.webp";
import JavaScript from "../../../public/jsIcon.webp";
import PHP from "../../../public/phpIcon.webp";
import AWS from "../../../public/awsIcon.webp";
import Image from "next/image";
import { ReactTab } from "./components/react";
import { TypeScriptTab } from "./components/typeScript";
import { JavaScriptTab } from "./components/javaScript";
import { PHPTab } from "./components/php";
import { AWSTab } from "./components/aws";
import { TabItem } from "./type";

export default function Navigation() {
  const [tab, setTab] = useAtom(tabAtom);
  const selectedTab = tab;

  const allIngredients: TabItem[] = [
    { icon: React, label: "React" },
    { icon: TypeScript, label: "TypeScript" },
    { icon: JavaScript, label: "JavaScript" },
    { icon: PHP, label: "PHP" },
    { icon: AWS, label: "AWS" },
  ];

  const underline = {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: "#0070f3",
  };

  const tabComponents = {
    React: <ReactTab />,
    TypeScript: <TypeScriptTab />,
    JavaScript: <JavaScriptTab />,
    PHP: <PHPTab />,
    AWS: <AWSTab />,
  };

  return (
    <div className="flex flex-col h-4/6 rounded-sm bg-white ">
      <nav className="pt-1 px-1 pb-0 rounded-sm border border-gray-300">
        <ul className="font-bold text-sm flex">
          {allIngredients.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor:
                  item.label === selectedTab.label ? "#eee" : "transparent",
              }}
              className="flex rounded-sm w-full relative bg-white cursor-pointer h-10 justify-between items-center px-2"
              onClick={() => setTab(item)}
            >
              <div className="flex items-center">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                  className="mr-2"
                />
                {item.label}
              </div>
              {item.label === selectedTab.label && (
                <motion.div
                  style={underline}
                  layoutId="underline"
                  id="underline"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab.label}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center py-20 text-center gap-5"
          >
            <Image
              src={selectedTab.icon}
              alt={selectedTab.label}
              width={80}
              height={80}
            />
            {tabComponents[selectedTab.label]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
