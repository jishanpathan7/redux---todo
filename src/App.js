import React from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import {AddTodoAction,RemoveTodoAction} from "./actions/TodoAction"
export default function App() {
  const [todo, setTodo] = React.useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;
  const handleSubmit = (e) => {
    e.preventDefault()
      dispatch(AddTodoAction(todo));
  };
  const  removeHandler = (t) => {
    dispatch(RemoveTodoAction(t))
  }

  return (
    <div>
      <h1>Todo List in Redux</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a todo"
          style={{
            width: 350,
            padding: 10,
            borderRadius: 20,
            border: 'none',
            fontSize: 20,
          }}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          style={{
            padding: 12,
            borderRadius: 25,
            fontSie: 15,
            marginLeft: 20,
          }}
        >
          GO
        </button>
      </form>
      <ul className="allTodos">
        {todos &&
          todos.map((t) => {
            return (
              <>
                <li key={t.id} className="singleTodo">
                  <span className="todoText">{t.todo}</span>
                  <button
                    style={{
                      padding: 10,
                      borderRadius: 25,
                      border: '1px solid white',
                      backgroundColor: 'orangered',
                    }}
                    onClick={()=> removeHandler(t)}
                  >
                    Delete
                  </button>
                </li>
              </>
            );
          })}
      </ul>
    </div>
  );
}
