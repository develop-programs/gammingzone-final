"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import React from "react";

export default function SignInForm() {
  const [viewPassword, setViewPassword] = React.useState(false);
  return (
    <div>
      <form action="" className="w-80 grid gap-4">
        <div>
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <Input type="email" placeholder="Email" id="email" />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-semibold">
            Password
          </label>
          <div className="flex items-center gap-2">
            <Input
              type={viewPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
            />
            <Button
              variant="ghost"
              type="button"
              size={"icon"}
              onClick={() => setViewPassword(!viewPassword)}
            >
              {viewPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
            </Button>
          </div>
        </div>
        <Button variant="orange" className="rounded-none">
          Submit
        </Button>
      </form>
    </div>
  );
}
