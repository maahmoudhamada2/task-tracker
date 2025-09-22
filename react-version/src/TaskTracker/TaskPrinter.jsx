import DeleteIcon from "./icons/DeleteIcon";

export default function TaskPrinter({ setTasksList, task, setIsChanged }) {
  const titleStyle = task.completed ? "text-gray-500 line-through" : null;
  const checkStyle = task.completed
    ? "appearance-none bg-gray-500 rounded-sm"
    : null;

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
    <section className="w-full relative p-[0.5rem] flex items-center border-b-2 border-gray-200 my-[0.5rem]">
      <input
        className={`mr-[0.4rem] w-[17px] h-[17px] cursor-pointer ${checkStyle}`}
        onClick={handleClick}
        id={`task_${task.id}`}
        type="checkbox"
      />
      <label className={`text-lg ${titleStyle}`} htmlFor={`task_${task.id}`}>
        {task.title}
      </label>
      <button
        className="absolute right-0 top-4 cursor-pointer"
        onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </section>
  );
}
