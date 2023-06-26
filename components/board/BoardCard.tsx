"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BsCheck2Circle, BsCircle } from "react-icons/bs";
import { FaRegComment, FaTasks } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Calendar } from "../ui/calendar";
import { Card, CardContent } from "../ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { TaskType } from "@/redux/types";
import { Draggable } from "react-beautiful-dnd";

type BoardCardProps = {
  task: TaskType;
  index: number;
};

const BoardCard: React.FC<BoardCardProps> = ({ task, index }) => {
  const [check, setCheck] = useState(false);
  const [like, setLike] = useState(false);
  const [openSubTask, setOpenSubTask] = useState(false);
  const [winReady, setwinReady] = useState(false);

  useEffect(() => {
    setwinReady(true);
  }, []);

  return (
    <>
      {winReady ? (
        <Draggable draggableId={task.id} index={index}>
          {(provided, snapshot) => (
            <Card
              className="w-80 rounded-xl bg-[#111113]"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <CardContent className="p-0 pb-4 flex flex-col">
                {task.cover && (
                  <Image
                    src={task.cover as string}
                    width={320}
                    height={10}
                    alt="some"
                    className="rounded-t-xl max-w-80 max-h-40 object-cover object-center"
                  />
                )}
                <div className="flex px-6 items-center gap-3 pt-4">
                  {task.completed ? (
                    <BsCheck2Circle size={19} onClick={() => {}} />
                  ) : (
                    <BsCircle
                      className="mt-[0.5px]"
                      size={19}
                      onClick={() => {}}
                    />
                  )}
                  <span>{task.title}</span>
                </div>
                <div className="flex px-6 pt-4 items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Popover>
                      <PopoverTrigger className="text-muted-foreground text-sm">
                        20 Jul
                      </PopoverTrigger>
                      <PopoverContent>
                        <Calendar
                          mode="single"
                          selected={new Date()}
                          onSelect={console.log}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <div className="flex gap-1 items-center">
                      {like ? (
                        <>
                          <span className="text-sky-400">20</span>
                          <AiFillLike
                            size={15}
                            className="fill-sky-400"
                            onClick={() => setLike(false)}
                          />
                        </>
                      ) : (
                        <>
                          <span>{task.likesCount > 0 && task.likesCount}</span>
                          <AiOutlineLike
                            size={15}
                            onClick={() => setLike(true)}
                          />
                        </>
                      )}
                    </div>

                    {task.commentIds && (
                      <div className="flex gap-1 items-center">
                        <span>{task.commentIds?.length}</span>
                        <FaRegComment size={15} />
                      </div>
                    )}

                    {task.subTaskIds && (
                      <div className="flex items-center">
                        <span className="mr-1">{task.subTaskIds.length}</span>
                        <FaTasks size={15} />
                        <IoMdArrowDropdown
                          size={25}
                          className={`${!openSubTask && "-rotate-90"}`}
                          onClick={() => setOpenSubTask(!openSubTask)}
                        />
                      </div>
                    )}
                  </div>
                </div>
                {openSubTask && (
                  <div className="px-6 flex flex-col text-sm mt-3 pt-2">
                    {/* subtask-1 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BsCheck2Circle
                          size={19}
                          onClick={() => setCheck(!check)}
                        />
                        {/* <BsCircle size={19} className="mt-[0.5px]" onClick={() => setCheck(!check)} /> */}
                        <span>Testing</span>
                      </div>
                      <div className="flex gap-2">
                        <Popover>
                          <PopoverTrigger className="text-muted-foreground text-xs">
                            Tomorrow
                          </PopoverTrigger>
                          <PopoverContent>
                            <Calendar
                              mode="single"
                              selected={new Date()}
                              onSelect={console.log}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <Avatar className="h-5 w-5">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                    <Separator className="my-2" />

                    {/* subtask-2 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BsCheck2Circle
                          size={19}
                          onClick={() => setCheck(!check)}
                        />
                        {/* <BsCircle size={19} className="mt-[0.5px]" onClick={() => setCheck(!check)} /> */}
                        <span>secure Funding</span>
                      </div>
                      <div className="flex gap-2">
                        <Popover>
                          <PopoverTrigger className="text-muted-foreground text-xs">
                            6 Jul
                          </PopoverTrigger>
                          <PopoverContent>
                            <Calendar
                              mode="single"
                              selected={new Date()}
                              onSelect={console.log}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <Avatar className="h-5 w-5">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </Draggable>
      ) : null}
    </>
  );
};

export default BoardCard;
