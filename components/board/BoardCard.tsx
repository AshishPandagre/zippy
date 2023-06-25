import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { BsCircle, BsCheck2Circle } from "react-icons/bs";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegComment, FaTasks } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import Image from "next/image";
import { Toggle } from "../ui/toggle";
import { Bold } from "lucide-react";
import { Separator } from "../ui/separator";

type BoardCardProps = {};

const BoardCard: React.FC<BoardCardProps> = () => {
  const [check, setCheck] = useState(false);
  const [like, setLike] = useState(false);
  const [openSubTask, setOpenSubTask] = useState(false);

  return (
    <Card className="w-80 rounded-xl bg-[#111113]">
      <CardContent className="p-0 pb-4 flex flex-col">
        <Image
          src={
            "https://asana-user-private-us-east-1.s3.amazonaws.com/assets/1204646066584019/1204896946125851/1204896946125852.LnRlxbCObT85sXHpMSOD_height640.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGvRImxyX2OYUW90knU66zcnpDzuzjVQLhfRbFjYK0DOAiAQO3t500TCjvLDj%2BZj960hi6r4bP2uu6y2b7Fc0XjyoSqwBQgrEAAaDDQwMzQ4MzQ0Njg0MCIMyeJr8DgfY7KcwpP%2BKo0FJ%2FlSXQKMjBR5BCje2AGBTK1U8jkgG45w3HNyx6vXCFTnIls6Wk2kPixdQTXmdeJw6gHGrN%2BVULF8zP%2BD%2B9Mvla7tkxgM%2Blg%2FgKKbFU0sdqjdcuxqYm6HDht8fW0Q4j3qWvOH%2F6YxIyjPGD0IrnZNfWxneHtMqnJzfREyYpPt7qoPXwB7frHlrgQ75AO5xqKVRpmHd6Mbyz67a%2FoINBXsIiF4%2BKqRO%2BkBV1cUiwHSTI%2BINjcYnGYnPt5PD6NT3uIM8idzN6AOCt6L5seiTZX6atJksr2hDzlo1b3GqRxa2%2FIA%2BycxHNWrtP50uQNls5K6ywOr1dtzvSkneFf%2B%2FSL8PMp2pGNXVmXxf%2B3nkI%2F0rAy068cC7WrI1NAHO9NEh%2BO%2F5BwGjtHdZzZZK80jwRXQqEukg79aIDpkq0Gi5CZTsXh2FCeFRInUlqhNNoIQNKmpViHYYakfOeGxeJoPlj85pogU3lJbjQVUjxby4j%2BFX%2FHu3%2BBBE0BMSGCYVVf8nlUx7C9GPdMAPGzjyPAJHIPYLvyl%2B34Gug4j8NXG6x2r1y%2Fj3cZPNbCnuJ5SFNPhZujE%2F7YWLnNy6ps4kmmyBueJas6u%2FwQUOFVGhjHSacO1DqJHtHiSb59QDL6G9rQzvNuBApK2tvxxBNsBnMyqp8OdIwhUyfEobxsduecKnq3Kie6t5Rn05NWLh5iUmPp%2BZRia4UcWJ6DUymOCgHoOkw%2FLwVad92gBpllpFBEU7r0kgqdiSQq9YBO1RCD9RU0IcCvdmlSAYQXJ5WKHIYWij8%2FF%2FA2Axh5S0%2F%2BcdX79LyrNW9jFvKb9YPXmt4qYtDqGo%2BY6qwoImCa2BXBxCrWzogc%2BZWKiI4YJw87n8mva5zgwhZ7gpAY6sgE%2B8iqdvzPHLdf4fymFnsLpQuqRKHsbb6UyDsZzIo7w8tG0XZC%2Fv0t9V21jigZxIlQiVFNUbLqk1XxmPqD8tpOqJtYgRR%2F7y8Ng2LXo%2BHC985JFHMd%2B5OUExGUn2GqkheY%2FVX%2BLDGRfNBiOg5R2h986TxRA64Brmp3xxoUbEzZ158%2FYodhbHdhk8fzxurqpp9theI8ufgomK6G%2FeTzk2Qb4oqp%2FZWuQed3jF9CsaP7fcUmF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230625T103157Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1800&X-Amz-Credential=ASIAV34L4ZY4HUWCJPOT%2F20230625%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=701f4dca2736c66d44032e44c1e49d65b8d91f5d213aee51eaf7beccb0f06984#_=_"
          }
          width={320}
          height={10}
          alt="some"
          className="rounded-t-xl"
        />
        <div className="flex px-6 items-center gap-3 pt-4">
          {check ? (
            <BsCheck2Circle size={19} onClick={() => setCheck(!check)} />
          ) : (
            <BsCircle
              className="mt-[0.5px]"
              size={19}
              onClick={() => setCheck(!check)}
            />
          )}
          <span>Testing</span>
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
                  <span>20</span>
                  <AiOutlineLike size={15} onClick={() => setLike(true)} />
                </>
              )}
            </div>
            <div className="flex gap-1 items-center">
              <span>4</span>
              <FaRegComment size={15} />
            </div>
            <div className="flex items-center">
              <span className="mr-1">3</span>
              <FaTasks size={15} />
              <IoMdArrowDropdown
                size={25}
                className={`${!openSubTask && "-rotate-90"}`}
                onClick={() => setOpenSubTask(!openSubTask)}
              />
            </div>
          </div>
        </div>
        {openSubTask && (
          <div className="px-6 flex flex-col text-sm mt-3 pt-2">
            {/* subtask-1 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BsCheck2Circle size={19} onClick={() => setCheck(!check)} />
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
                <BsCheck2Circle size={19} onClick={() => setCheck(!check)} />
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
  );
};

export default BoardCard;
