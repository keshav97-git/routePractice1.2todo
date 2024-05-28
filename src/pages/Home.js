import { Link } from "react-router-dom";
export default function Home({ todo }) {
  return (
    <div>
      <h1>Todo's</h1>
      <ul>
        {todo.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                border: "3px solid orange",
                margin: "8px",
                listStyle: "none",
                paddingBottom: "8px",
              }}
            >
              <h2
                style={{
                  textDecoration: item.isCompleted ? "line-through" : "",
                }}
              >
                {item.title}
              </h2>
              <p
                style={{
                  textDecoration: item.isCompleted ? "line-through" : "",
                }}
              >
                {item.description}
              </p>
              <p>
                {item.isCompleted ? "Status: Done" : "Status : Not Complete"}
              </p>
              <Link to={`/todo/${item.id}`}>Expand Todo</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
