"use client";
import React, { useState } from "react";
import Nav from "../ui/Nav";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  ChevronRight,
  File,
  Inbox,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";
import { TooltipProvider } from "../ui/tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button, buttonVariants } from "../ui/button";

import Link from "next/link";
import { cn } from "@/lib/utils";
import LogoutButton from "./LogoutButton";

type Props = {};



const SideBar = (props: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <section className="relative h-screen py-5 bg-slate-950 flex flex-col justify-between items-center">
        <Button variant='secondary' className=" absolute right-[-20px] top-7 p-2 rounded-full font-thin">
            <ChevronRight height={20} onClick={() => setIsCollapsed(prev => !prev)}/>
        </Button>
        <div className=""></div>
      <TooltipProvider>
        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: "Inbox",
              label: "128",
              icon: Inbox,
              variant: "default",
            },
            {
              title: "Drafts",
              label: "9",
              icon: File,
              variant: "ghost",
            },
            {
              title: "Sent",
              label: "",
              icon: Send,
              variant: "ghost",
            },
            {
              title: "Junk",
              label: "23",
              icon: ArchiveX,
              variant: "ghost",
            },
            {
              title: "Trash",
              label: "",
              icon: Trash2,
              variant: "ghost",
            },
            {
              title: "Archive",
              label: "",
              icon: Archive,
              variant: "ghost",
            },
          ]}
        />
        <LogoutButton isCollapsed={isCollapsed}/>
      </TooltipProvider>
    </section>
  );
};



export default SideBar;
