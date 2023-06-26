"use client";
import React, { useEffect, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import BoardMenu from "./BoardMenu";
import { SectionType } from "@/redux/types";

type CardWrapperProps = {
  children: React.ReactNode;
  section: SectionType;
};

const CardWrapper: React.FC<CardWrapperProps> = ({ children, section }) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // scrollAreaRef.current.
    const setHeight = () => {
      if (scrollAreaRef.current) {
        const top = Math.abs(scrollAreaRef.current.getBoundingClientRect().top);
        const windowSize = window.innerHeight;
        scrollAreaRef.current.style.height = `${windowSize - top - 40}px`;
        console.log(top, windowSize);
      }
    };
    setHeight();
    window.onresize = setHeight;
  }, []);

  return (
    <Card className="w-fit p-0 rounded-xl">
      <div className="flex items-center justify-between px-4">
        <CardHeader className="py-4 px-0 sticky">{section.title}</CardHeader>
        <div className="flex items-center gap-3">
          <AiOutlinePlus />
          <BoardMenu />
        </div>
      </div>
      <ScrollArea ref={scrollAreaRef} className="w-full">
        <CardContent className="px-2 pt-0 flex flex-col gap-4">
          {children}
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

export default CardWrapper;
