export default function OpenTodo({ openTodo, dOnClick }) {
  return (
    <div>
      <h3>Open Todo's</h3>
      <ul>
        {openTodo.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                border: "3px solid orange",
                margin: "8px",
                listStyle: "none",
                paddingBottom: "10px",
              }}
            >
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>
                {item.isCompleted ? "Status: Done" : "Status : Not Complete"}
              </p>
              <button onClick={() => dOnClick(item.id)}>Done Todo</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
