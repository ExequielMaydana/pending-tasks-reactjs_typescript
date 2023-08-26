import { Task } from "./Task";

type Props = {
  listTasks: string[];
  deleteTasks: (index: number) => void;
};

export const ListTasks = ({ listTasks, deleteTasks }: Props) => {
  return (
    <article className="w-4/5 flex flex-col items-center justify-center gap-6">
      {listTasks.map((task, i) => (
        <Task key={i} task={task} deleteTask={() => deleteTasks(i)}></Task>
      ))}
    </article>
  );
};
