"use client";
import React, { useState } from "react";
import Nav from "../ui/Nav";
import {
  AlertCircle,
  ChevronRight,
  CheckCircle,
  KanbanSquare,
  ClipboardList,
  ChevronLeft
} from "lucide-react";
import { TooltipProvider } from "../ui/tooltip";
import { Button } from "../ui/button";
import LogoutButton from "./LogoutButton";


const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <section className="fixed h-screen py-5 bg-slate-950 flex flex-col justify-between items-center">
        <Button variant='secondary' className=" absolute right-[-20px] top-7 p-2 rounded-full font-thin">
            {isCollapsed ? <ChevronRight height={20} onClick={() => setIsCollapsed(prev => !prev)}/>:<ChevronLeft height={20} onClick={() => setIsCollapsed(prev => !prev)}/> }
        </Button>
        
      <TooltipProvider>
        <div className=""></div>
        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: "All Tasks",
              label: "",
              icon:ClipboardList,
              variant: "default",
              href:"/"
            },
            {
              title: "Important",
              label: "",
              icon: AlertCircle,
              variant: "ghost",
              href:"/important"
            },
            {
                title: "Completed",
                label: "",
                icon: CheckCircle,
                variant: "ghost",
                href:"/completed"
            },
            {
              title: "Board",
              label: "",
              icon: KanbanSquare,
              variant: "ghost",
              href:"/board"
            },
          ]}
        />
        <LogoutButton isCollapsed={isCollapsed}/>
      </TooltipProvider>
    </section>
  );
};



export default SideBar;
