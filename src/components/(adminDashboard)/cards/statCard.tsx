import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

type TProps = {
  title: string;
  growth?: string;
  amount: string;
  increase?: boolean;
  timeLine: string;
};

export default function StatCard({
  title,
  growth,
  amount,
  increase,
  timeLine
}: TProps) {
  return (
    <div className="flex flex-col xl:gap-y-2 gap-y-1  justify-center p-6  flex-1 bg-section-bg rounded-xl border border-[#FFEDB0]/50">
      <h3 className=" text-[#212529] truncate">{title}</h3>
      <p className="xl:text-3xl lg:text-2xl text-xl font-medium ">{amount}</p>
      <div className="flex gap-2">
        <h1
          className={cn("flex", increase ? "text-[#165940]" : "text-[#5F1011]", increase=== undefined && "text-[#FEC400]")}
        >
          <div className={cn(!increase && "hidden")}>
            {increase ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
          </div>
          {growth}
        </h1>
        <h6 className="text-[#7F7F7F]">{timeLine}</h6>
      </div>
    </div>
  );
}
