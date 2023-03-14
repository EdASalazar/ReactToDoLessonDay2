import "./ToDoListItem.css";

export default function ToDoListItem({ todo, index }) {
  return (
    <li
      className={"ToDoListItem"}
      style={{ backgroundColor: index % 2 ? "lavender" : "plum" }}
    >
      <div className="number">{index}</div>
      {todo}
    </li>
  );
}
