export default function DoneTodo({ doneTodo }) {
  console.log("doneTodo", doneTodo);
  return (
    <div>
      <h3>Done Todo's</h3>
      <ul>
        {doneTodo.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                border: "3px solid orange",
                margin: "8px",
                listStyle: "none",
              }}
            >
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>
                {item.isCompleted ? "Status: Done" : "Status : Not Complete"}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
