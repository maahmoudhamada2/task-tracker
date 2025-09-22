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
        className="w-full border-2 p-[0.5rem] rounded-xl"
        ref={inputRef}
        id="task-field"
        name="task-field"
        type="text"
        placeholder="Start writing and press enter to create task"
      />
      <button
        className="flex justify-center items-center absolute bottom-2 right-2 bg-black w-[30px] h-[30px] rounded-md cursor-pointer"
        type="submit"
        onClick={handleClick}>
        <EnterIcon />
      </button>
    </>
  );
}
