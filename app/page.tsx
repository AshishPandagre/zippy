"use client";
import BoardCard from "@/components/board/BoardCard";
import CardWrapper from "@/components/board/CardWrapper";
import Theme from "@/components/theme/theme";

export default function Home() {
  return (
    // <Theme />
    // <BoardCard />
    <div className="py-5 flex gap-10">
      <CardWrapper>
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
      </CardWrapper>
      <CardWrapper>
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
      </CardWrapper>
    </div>
  );
}
