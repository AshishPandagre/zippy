import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import BoardMenu from "./BoardMenu";

type CardWrapperProps = {
  children: React.ReactNode;
};

const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
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
        <CardHeader className="py-4 px-0 sticky">Todo</CardHeader>
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
