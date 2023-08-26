type Props = {
  task: string;
  deleteTask: () => void;
};

export const Task = ({ task, deleteTask }: Props) => {
  return (
    <article className="w-3/5 p-2 flex items-center justify-between gap-4 bg-white rounded-lg">
      <div className="w-full min-h-1/5 overflow-y-auto scrollHidden">
        <p className="text-black pl-2 flex flex-wrap">{task}</p>
      </div>
      <button
        onClick={deleteTask}
        className="px-3 py-1 bg-red-600 rounded-md shadow-sm shadow-red-300"
      >
        X
      </button>
    </article>
  );
};
