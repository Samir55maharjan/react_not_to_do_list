import React from 'react'
import { BadList } from './BadList'
import { TaskList } from './TaskList'

export const List = () => {
  return (
    <div className="row mt-5 g-2">
          <TaskList/>
         <BadList/>
        </div>
  )
}
