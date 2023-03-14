import ToDoList from "./ToDoList";
import "./styles.css";

const todos = ["Have Fun", "Learn React", "Learn the MERN-Stack"];

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <ToDoList todos={todos} />
    </div>
  );
}
