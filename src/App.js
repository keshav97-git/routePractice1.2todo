import "./styles.css";
import { Route, NavLink } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import OpenTodo from "./pages/OpenTodo";
import DoneTodo from "./pages/DoneTodo";
import { fakeFetch } from "./api/ap1";
import { useEffect, useState } from "react";
import Descrip from "./components/Descrip";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [openTodo, setOpenTodo] = useState([]);
  const [doneTodo, setDoneTodo] = useState([]);
  const [todoDes, setTodoDes] = useState([]);
  const handleData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/todos");
      if (res.status == 200) {
        // console.log(res.data.todos);
        setTodo(res.data.todos);
        setDoneTodo(res.data.todos.filter((item) => item.isCompleted));
        setOpenTodo(res.data.todos.filter((item) => !item.isCompleted));
        setTodoDes(res.data.todos);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const dOnClick = (id) => {
    const updatedTodos = todo.map((item) =>
      item.id === id ? { ...item, isCompleted: true } : item
    );

    setTodo(updatedTodos);
    setDoneTodo(updatedTodos.filter((item) => item.isCompleted));
    setOpenTodo(updatedTodos.filter((item) => !item.isCompleted));
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="App">
      <NavLink to={"/"} style={{ margin: "10px" }}>
        Home
      </NavLink>
      <NavLink to={"/open"} style={{ margin: "10px" }}>
        Open Todo
      </NavLink>
      <NavLink to={"/done"} style={{ margin: "10px" }}>
        Done Todo
      </NavLink>
      <Routes>
        <Route path="/" element={<Home todo={todo} />} />
        <Route
          path="/open"
          element={<OpenTodo openTodo={openTodo} dOnClick={dOnClick} />}
        />
        <Route path="/done" element={<DoneTodo doneTodo={doneTodo} />} />
        <Route path="/todo/:todoId" element={<Descrip todoDes={todoDes} />} />
      </Routes>
    </div>
  );
}
