import React from "react";
import SignInForm from "./(components)/signIn-Form";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="h-screen grid place-content-center space-y-4">
      <SignInForm />
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">or</span>
      </div>
      <div className="grid gap-2">
        <Button variant="outline" size="lg">
          Login with Google
        </Button>
        <Button variant="outline" size="lg">
          Login with Github
        </Button>
      </div>
    </div>
  );
}
