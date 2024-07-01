"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export default function Tickets({ ticket }: { ticket: any }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-full p-2 border rounded-lg hover:bg-slate-300 cursor-pointer">
          <div className="flex flex-col items-start space-y-2">
            <Badge
              variant={
                ticket.priority === "Critical"
                  ? "blue"
                  : ticket.priority === "High"
                  ? "critical"
                  : ticket.priority === "Medium"
                  ? "yellow"
                  : ticket.priority === "Low"
                  ? "green"
                  : "default"
              }
            >
              {ticket.priority}
            </Badge>
            <div className="select-none">
              <span className="text-sm dark:text-slate-600">
                {ticket.issue}
              </span>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent></DialogContent>
    </Dialog>
  );
}
