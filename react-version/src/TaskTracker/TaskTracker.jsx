import { useState } from "react";
import TaskField from "./TaskField";
import TaskPrinter from "./TaskPrinter";

export default function TaskTracker() {
  const [tasksList, setTasksList] = useState([]);
  const [taskId, setTaskId] = useState(1);
  const [, setIsChanged] = useState(false);

  return (
    <article className="w-[600px] mx-auto mt-[100px] border-2 p-[2.5rem] rounded-2xl flex flex-col justify-center items-center">
      <header className="w-full flex flex-wrap relative">
        <h1 className="w-full text-2xl mb-[0.5rem]">Task Tracker</h1>
        <TaskField
          setTasksList={setTasksList}
          setTaskId={setTaskId}
          id={taskId}
        />
      </header>
      <main>
        {tasksList
          .map((elem) => (
            <TaskPrinter
              setTasksList={setTasksList}
              key={elem.id}
              task={elem}
              setIsChanged={setIsChanged}
            />
          ))
          .reverse()}
      </main>
    </article>
  );
}
