interface Tasks {
  tasks: {
    todo: Task[];
    doing: Task[];
    done: Task[];
  };
}

interface SubtaskT {
  id: string;
  title: string;
  completed: boolean;
  taskId: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
  boardId: string;
  stage: string;
}

interface List {
  id: string;
  name: string;
  list: Task[];
}

export type { Tasks, SubtaskT, Task, List };
