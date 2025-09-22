import { useRef } from "react";
import createTask from "../utils/createTask";
import EnterIcon from "./icons/EnterIcon";

export default function TaskField({ setTasksList, setTaskId, id }) {
  const inputRef = useRef();

  const handleClick = () => {
    if (inputRef.current.value) {
      const taskTitle = inputRef.current.value;
      setTasksList((prev) => [...prev, createTask(taskTitle, id)]);
      setTaskId((prev) => prev + 1);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        id="task-field"
        name="task-field"
        type="text"
        placeholder="Start writing and press enter to create task"
      />
      <button type="submit" onClick={handleClick}>
        <EnterIcon />
      </button>
    </>
  );
}
