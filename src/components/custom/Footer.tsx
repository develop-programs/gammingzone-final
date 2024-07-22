import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <section
      aria-label="Footer Section"
      className="bg-black divide-y divide-slate-700 text-white select-none"
    >
      <div className="w-full">
        <div className="container grid grid-cols-5 py-4">
          <div></div>
          <div>
            <span className="text-lg uppercase font-semibold">
              Top Categories
            </span>
            <div className="grid gap-1 mt-4">
              {[
                "Computer & Laptop",
                "SmartPhone",
                "Headphone",
                "Accessories",
                "Camera & Photo",
                "TV & Homes",
              ].map((item, index) => (
                <div key={index} className="text-sm text-slate-400">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-lg uppercase font-semibold">Quick Links</span>
            <div className="grid gap-1 mt-4">
              {[
                "Shop Product",
                "Shoping Cart",
                "Wishlist",
                "Compare",
                "Track Order",
                "Customer Help",
                "About Us",
              ].map((item, index) => (
                <div key={index} className="text-sm text-slate-400">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-lg uppercase font-semibold">
              Available On
            </span>
            <div className="grid gap-1 mt-4">
              {["/images/Mobile App.png", "/images/Mobile App-1.png"].map(
                (item, index) => (
                  <Image
                    src={item}
                    alt={item}
                    width={300}
                    height={300}
                    key={index}
                    className="w-32"
                  />
                )
              )}
            </div>
          </div>
          <div className="grid">
            <span className="text-lg uppercase font-semibold">
              Popular Tags
            </span>
            <div className="flex gap-2 flex-wrap">
              {[
                "Game",
                "Macbook",
                "iPhone",
                "SSD",
                "TV",
                "Asus Laptops",
                "Graphics Card",
                "Power Bank",
                "Smart TV",
                "Tablet",
                "Microwave",
                "Speaker",
                "Samsung",
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-xs  grid place-content-center border rounded-sm py-1 px-2 hover:bg-white/20"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container text-xs text-center py-2">
          <span className="sr-only">Copyright section</span>
          <span>Copyright © 2024. All Rights Reserved.</span>
        </div>
      </div>
    </section>
  );
}
