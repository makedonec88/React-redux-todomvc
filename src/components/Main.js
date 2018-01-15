import React from 'react'

import TodoItem from './TodoItem'

const Main = ({todos, onTodoChange}) => (
    <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
            {/* These are here just to show the structure of the list items */}
            {/* List items should get the class `editing` when editing and `completed` when marked as completed */}
            {todos && todos.map((todo) => (
              <TodoItem 
                key={todo.id}
                onTodoChange={onTodoChange}
                {...todo} />
            ))}
        </ul>
    </section>
)

export default Main