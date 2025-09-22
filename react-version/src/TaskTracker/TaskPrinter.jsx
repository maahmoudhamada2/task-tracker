import DeleteIcon from "./icons/DeleteIcon";

export default function TaskPrinter({ setTasksList, task, setIsChanged }) {
  const style = task.completed ? "text-gray-500 line-through" : null;
  const handleClick = () => {
    task.completed = task.completed === true ? false : true;
    setTasksList((prev) =>
      prev.sort((a, b) => a.completed - b.completed).reverse()
    );
    setIsChanged((prev) => !prev);
  };

  const handleDelete = () => {
    setTasksList((prev) => prev.filter((elem) => elem.id !== task.id));
  };
  return (
    <section>
      <input onClick={handleClick} id={`task_${task.id}`} type="checkbox" />
      <label className={`${style}`} htmlFor={`task_${task.id}`}>
        {task.title}
      </label>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </section>
  );
}
