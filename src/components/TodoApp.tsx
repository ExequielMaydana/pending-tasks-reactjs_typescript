import React, { useState } from "react";
import { ListTasks } from "./ListTasks";

export const TodoApp = () => {
  const [newTasks, setNewTasks] = useState<string>("");

  const [listTasks, setListTasks] = useState<string[]>([]);

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newTasks.trim() === "") return;
    setListTasks((taskAfter) => [...taskAfter, newTasks]);
    setNewTasks("");
  };

  const handleDeleteTask = (n: number) => {
    setListTasks((tasks) => tasks.filter((_, i) => i !== n));
  };

  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 p-24 text-white">
      <header>
        <h1 className="text-2xl font-bold">Lista de Tareas</h1>
      </header>
      <form
        onSubmit={handleAddTask}
        className="min-w-4/5	max-w-2/5 flex flex-col items-center gap-4"
      >
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="task" className="text-gray-300">
            Tarea
          </label>
          <input
            type="text"
            id="task"
            value={newTasks}
            onChange={(e) => setNewTasks(e.target.value)}
            placeholder="Ej: Lavar los platos."
            className="px-2 py-1 rounded-sm shadow text-black outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-4/5 px-2 py-1 font-semibold bg-indigo-700 uppercase rounded-sm"
        >
          Añadir Tarea
        </button>
      </form>

      <ListTasks
        listTasks={listTasks}
        deleteTasks={handleDeleteTask}
      ></ListTasks>
    </section>
  );
};
