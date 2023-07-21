interface Task {
  id: string;
  title: string;
  description: string;
  subtask: string;
  status: string;
}

interface Tasks {
  tasks: {
    todo: Task[];
    doing: Task[];
    done: Task[];
  };
}

export type { Task, Tasks };
