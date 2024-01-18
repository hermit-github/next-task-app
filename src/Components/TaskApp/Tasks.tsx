import { tasks } from '@/lib/data'
import React from 'react'
import Task from './Task'
import { TaskType } from '@/lib/types'

type Props = {
  type:TaskType
}

const Tasks = ({type}: Props) => {
  return (
    <section className='h-max-[90vh] flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
        {tasks.map(task => (
            <React.Fragment key={task.id} >
                <Task task={task}/>
            </React.Fragment>
        ))}
    </section>
  )
}

export default Tasks