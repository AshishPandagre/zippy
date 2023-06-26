"use client"
import BoardCard from "@/components/board/BoardCard";
import CardWrapper from "@/components/board/CardWrapper";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

type BoardProps = {};

const Board: React.FC<BoardProps> = () => {
  const section = useAppSelector((state) => state.section);
  const tasks = useAppSelector((state) => state.task);

  return (
    <div className="py-5 flex gap-10">
      {section.allIds.map((sectionId) => (
        <CardWrapper key={sectionId} section={section.byId[sectionId]}>
          {section.byId[sectionId].taskIds.map((taskId) => (
            <BoardCard key={taskId} task={tasks[taskId]} />
          ))}
        </CardWrapper>
      ))}
    </div>
  );
};

export default Board;
