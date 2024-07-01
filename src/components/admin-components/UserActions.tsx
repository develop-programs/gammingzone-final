import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function UserActions() {
  return (
    <div className="flex items-center gap-3">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
            >
              <path
                d="M19.725 17.025C19.2 15.7125 19.05 14.175 19.05 13.9875V10.2375C19.05 6.63749 16.3125 3.63749 12.825 3.22499V1.49999C12.825 1.04999 12.45 0.674988 12 0.674988C11.55 0.674988 11.175 1.04999 11.175 1.49999V3.26249C7.68747 3.67499 4.94997 6.67499 4.94997 10.275V14.025C4.94997 14.2125 4.79997 15.75 4.27497 17.0625C3.97497 17.85 4.04997 18.7125 4.49997 19.3875C4.94997 20.0625 5.73747 20.475 6.56247 20.475H8.62497C8.92497 22.0875 10.3125 23.325 12 23.325C13.6875 23.325 15.1125 22.0875 15.375 20.475H17.4C18.225 20.475 19.0125 20.0625 19.4625 19.3875C19.95 18.675 20.0625 17.8125 19.725 17.025ZM12 21.675C11.25 21.675 10.6125 21.1875 10.35 20.5125H13.65C13.3875 21.15 12.75 21.675 12 21.675ZM18.075 18.45C17.925 18.675 17.6625 18.825 17.4 18.825H6.59997C6.33747 18.825 6.07497 18.7125 5.92497 18.45C5.77497 18.225 5.73747 17.925 5.84997 17.7C6.52497 16.05 6.63747 14.175 6.63747 14.1V14.0625V10.275C6.63747 7.31249 9.03747 4.87499 12 4.87499C14.9625 4.87499 17.3625 7.27499 17.3625 10.2375V14.025V14.0625C17.3625 14.1375 17.475 16.0125 18.15 17.6625C18.2625 17.925 18.2625 18.225 18.075 18.45Z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          align="end"
          className="w-60 rounded-md border border-slate-900 bg-popover p-4 text-popover-foreground h-60 shadow-xl"
        ></PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
            >
              <path
                d="M20.9999 3.59998H2.99995C1.72495 3.59998 0.637451 4.64998 0.637451 5.96248V18.1125C0.637451 19.3875 1.68745 20.475 2.99995 20.475H20.9999C22.2749 20.475 23.3624 19.425 23.3624 18.1125V5.92498C23.3624 4.64998 22.2749 3.59998 20.9999 3.59998ZM20.9999 5.28748C21.0374 5.28748 21.0749 5.28748 21.1124 5.28748L11.9999 11.1375L2.88745 5.28748C2.92495 5.28748 2.96245 5.28748 2.99995 5.28748H20.9999ZM20.9999 18.7125H2.99995C2.62495 18.7125 2.32495 18.4125 2.32495 18.0375V6.93748L11.1 12.5625C11.3625 12.75 11.6624 12.825 11.9624 12.825C12.2624 12.825 12.5625 12.75 12.825 12.5625L21.5999 6.93748V18.075C21.6749 18.45 21.3749 18.7125 20.9999 18.7125Z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          align="end"
          className="w-[200px] h-60"
        ></PopoverContent>
      </Popover>
      <Avatar className="size-12">
        <AvatarImage src="" alt="" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  );
}
