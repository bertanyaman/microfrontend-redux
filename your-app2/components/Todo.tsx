import React from 'react'

const Todo = ({ onClick, completed, text }: { onClick: React.MouseEventHandler<HTMLLIElement>, completed: boolean, text: string }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo
