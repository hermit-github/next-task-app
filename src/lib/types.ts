import { LucideIcon } from "lucide-react";

export type NavigationTabs = "All Tasks" | "Important" | "Completed" | "Board"; 
export type TaskType = "all" | "important" | "completed" | "board";
export interface NavProps {
    isCollapsed: boolean
    links: {
      title: NavigationTabs
      label?: string
      icon: LucideIcon
      variant: "default" | "ghost"
      href:string
    }[]
  }

export type Task = {
    id:string;
    title:string;
    status:"In Progress"|"Not Started"|"Completed";
    desc:string;
    priority:0|1|2|3|4;
    createdAt:string;
    completedAt:string;
    updatedAt:string;
    aging:number;
}