import { Task, SubtaskT } from "@/types/newTask.modal";
import { Stage } from "@/features/Tasks/taskSlice";

interface TaskListSectionProps {
  taskStageList: Stage[];
  tasks: Task[];
  subtasks: SubtaskT[];
  selectedTask: Task;
  setSelectedTask: (id: string) => void;
}

export type { TaskListSectionProps };
