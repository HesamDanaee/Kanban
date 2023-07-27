interface Tasks {
  tasks: {
    todo: Task[];
    doing: Task[];
    done: Task[];
  };
}

interface subtask {
  id: string;
  title: string;
  completed: boolean;
}

interface Task {
  id: string;
  title: string;
  description: string;
  subtasks: subtask[];
  stage: string;
}

interface TodoTask {
  id: string;
  title: string;
  description: string;
  subtasks: subtask[];
}

interface DoingTask {
  id: string;
  title: string;
  description: string;
  subtasks: subtask[];
}

interface DoneTask {
  id: string;
  title: string;
  description: string;
  subtasks: subtask[];
}

interface List {
  id: string;
  name: string;
  list: Task[];
}

export type { Tasks, subtask, Task, List, TodoTask, DoingTask, DoneTask };
