import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { buttonVariants } from "../ui/button";
import Link from 'next/link';
import { Power } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
    isCollapsed:boolean;
}

const log = {
    title: "Logout",
    label: "",
    icon: Power,
    variant: "ghost",
  };

const LogoutButton = ({isCollapsed}: Props) => {
  return (
    <div className="w-full flex justify-center items-center">
        {isCollapsed ? (
          <Tooltip key={10} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: log.variant, size: "icon" }),
                  "h-9 w-9",
                  log.variant === "default" &&
                    "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                )}
              >
                <log.icon className="h-4 w-4" />
                <span className="sr-only">{log.title}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="flex items-center gap-4">
              {log.title}
              {log.label && (
                <span className="ml-auto text-muted-foreground">
                  {log.label}
                </span>
              )}
            </TooltipContent>
          </Tooltip>
        ) : (
          <Link
            key={10}
            href="#"
            className={cn(
              buttonVariants({ variant: log.variant, size: "sm" }),
              log.variant === "default" &&
                "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
              "justify-start"
            )}
          >
            <log.icon className="mr-2 h-4 w-4" />
            {log.title}
            {log.label && (
              <span
                className={cn(
                  "ml-auto",
                  log.variant === "default" && "text-background dark:text-white"
                )}
              >
                {log.label}
              </span>
            )}
          </Link>
        )}
        </div>
  )
}

export default LogoutButton