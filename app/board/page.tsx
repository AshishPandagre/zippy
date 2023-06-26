"use client";
import BoardCard from "@/components/board/BoardCard";
import CardWrapper from "@/components/board/CardWrapper";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { DragDropContext } from "react-beautiful-dnd";
import React from "react";
import { moveCard } from "@/redux/sectionSlice";

type BoardProps = {};

const Board: React.FC<BoardProps> = () => {
  const section = useAppSelector((state) => state.section);
  const tasks = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  const onCardDragEnd = (result: any) => {
    if (!result.destination) return;
    dispatch(
      moveCard({ source: result.source, destination: result.destination })
    );
  };

  return (
    <div className="py-5 flex gap-10">
      <DragDropContext onDragEnd={onCardDragEnd}>
        {section.allIds.map((sectionId, index) => (
          <CardWrapper
            key={sectionId}
            section={section.byId[sectionId]}
            index={index}
          >
            {section.byId[sectionId].taskIds.map((taskId, index) => (
              <BoardCard key={taskId} task={tasks[taskId]} index={index} />
            ))}
          </CardWrapper>
        ))}
      </DragDropContext>
    </div>
  );
};

export default Board;
