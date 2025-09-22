import { useState } from "react";
import TaskField from "./TaskField";
import TaskPrinter from "./TaskPrinter";

export default function TaskTracker() {
  const [tasksList, setTasksList] = useState([]);
  const [taskId, setTaskId] = useState(1);
  const [, setIsChanged] = useState(false);

  return (
    <article>
      <header>
        <h1>Task Tracker</h1>
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
