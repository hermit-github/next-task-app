import React from 'react'
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Task } from '@/lib/types'
import { Pencil,Trash } from 'lucide-react'

type Props = {
  task:Task
}

const Task = ({task}: Props) => {
  return (
    <Card   className="bg-slate-900 w-[100%] sm:w-[24%] ">
      <CardHeader>
        <CardTitle className='text-white/60 text-lg'>{task.title}</CardTitle>
        <p className='text-sm'>Created At: {task.createdAt}</p>
        <p className='text-sm'>Aging: {task.aging} day{task.aging>1 && (<span>s</span>)}</p>
      </CardHeader>
      <CardContent>
        <CardDescription className='text-ellipsis'>{task.desc}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="default" className='bg-black/30 hover:bg-black/70'>Change Status</Button>
        <div className="flex gap-1">
          <Pencil />
          <Trash />
        </div>
      </CardFooter>
    </Card>
  )
}

export default Task
