import { useParams } from "react-router-dom";

export default function Descrip({ todoDes }) {
  const { todoId } = useParams();
  const newArr = todoDes.filter((item) => item.id == todoId);
  console.log(newArr[0]);
  return (
    <div>
      <h1>Todo Description</h1>
      <div style={{ border: "3px solid orange" }}>
        <h3>Title : {newArr[0]?.title}</h3>
        <p>
          <span style={{ color: "blue" }}>Description :</span>{" "}
          {newArr[0]?.description}
        </p>
        <p>
          <span style={{ color: "red" }}>Status : </span>{" "}
          {newArr[0]?.status ? "Done" : "Open"}
        </p>
      </div>
    </div>
  );
}
