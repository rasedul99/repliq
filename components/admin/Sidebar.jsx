import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { useRouter } from "next/router";
import { RiProductHuntLine } from "react-icons/ri";

const Sidebar = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <div className="bg-purple text-white p-3 rounded-lg inline-block">
            <RxSketchLogo size={20} />
          </div>
          <span className="border-b-[1px] border-[#EEEEEE] w-full p-2"></span>
          <Link href="/admin">
            <div
              className={`hover:bg-[#EEEEEE] cursor-pointer my-4 p-3 rounded-lg inline-block ${
                router.pathname == "/admin" ? "bg-[#EEEEEE]" : ""
              }`}
            >
              <RxDashboard size={20} />
            </div>
          </Link>
          {/* Products section */}
          <Link href="/admin/products">
            <div
              className={`hover:bg-[#EEEEEE] cursor-pointer my-4 p-3 rounded-lg inline-block ${
                router.pathname == "/admin/products" ? "bg-[#EEEEEE]" : ""
              }`}
            >
              <RiProductHuntLine size={20} />
            </div>
          </Link>
          {/* Customer section */}
          <Link href="/admin/customers">
            <div
              className={`hover:bg-[#EEEEEE] cursor-pointer my-4 p-3 rounded-lg inline-block ${
                router.pathname == "/admin/customers" ? "bg-[#EEEEEE]" : ""
              }`}
            >
              <RxPerson size={20} />
            </div>
          </Link>
          {/* order section */}
          <Link href="/admin/orders">
            <div
              className={`hover:bg-[#EEEEEE] cursor-pointer my-4 p-3 rounded-lg inline-block ${
                router.pathname == "/admin/orders" ? "bg-[#EEEEEE]" : ""
              }`}
            >
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          {/* Setting */}
          <Link href="/admin/setting">
            <div
              className={`hover:bg-[#EEEEEE] cursor-pointer my-4 p-3 rounded-lg inline-block ${
                router.pathname == "/admin/setting" ? "bg-[#EEEEEE]" : ""
              }`}
            >
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
