import React from "react";

export default function page() {
  return (
    <div className="h-screen grid grid-cols-12 gap-4">
      <div className="col-span-4"></div>
      <div className="col-span-8">
        <div>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
