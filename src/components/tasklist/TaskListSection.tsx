// Global Imports
import { useDispatch } from "react-redux";
// Local Imports

import {
  TaskSection,
  TaskList,
  ListStatus,
  TaskWrapper,
  DescriptionTxt,
  Subtasktxt,
  Container,
  WrapperTop,
  SubtaskWrapper,
  CheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  SelectWrapper,
  Subtask,
  CurrentStatus,
  OptionWrapper,
  StatusSelect,
  StatusOption,
} from "./TaskParts";

import { Task } from "@/types/newTask.modal";

// Selectors
import { editSubTask } from "@/features/Tasks/Task/taskSlice";

interface TaskListSectionProps {
  taskListName: string[];
  tasks: Task[];
  toggleModal: (taskId: boolean) => void;
  selectedTask: string;
  openModal: boolean;
  setSelectedTask: (id: string) => void;
  toggle: boolean;
}

function TaskListSection({
  taskListName,
  tasks,
  toggleModal,
  selectedTask,
  openModal,
  setSelectedTask,
  toggle,
}: TaskListSectionProps) {
  const dispatch = useDispatch();
  return (
    <TaskSection
      onClick={() => {
        toggleModal(false);
      }}
      toggle={toggle}
    >
      {taskListName.map((name) => {
        const list = tasks.filter((list) => list.stage === name);

        // Task Lists
        const mappedList = list.map((list) => {
          const subtasks = list.subtasks;
          const completeds = subtasks.filter((sub) => sub.completed === true);
          return (
            <TaskWrapper
              key={list.id}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedTask(list.id);
                toggleModal(true);
              }}
            >
              <DescriptionTxt modal={false} children={list.description} />
              <Subtasktxt
                modal={false}
                children={`${completeds.length} of ${subtasks.length} subtasks`}
              />
            </TaskWrapper>
          );
        });

        return (
          <TaskList>
            <ListStatus children={`${name} (${list.length})`} />
            {mappedList}
          </TaskList>
        );
      })}

      {/*  Modal  */}
      {openModal && (
        <Container
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <DescriptionTxt
            modal={true}
            children={`${
              tasks.filter((task) => task.id === selectedTask)[0]?.description
            }`}
          />

          <WrapperTop>
            <Subtasktxt
              modal={true}
              children={`Subtasks ${
                tasks
                  .filter((task) => task.id === selectedTask)[0]
                  .subtasks.filter((sub) => sub.completed === true).length
              } of ${
                tasks.filter((task) => task.id === selectedTask)[0].subtasks
                  .length
              }`}
            />
            {tasks
              .filter((task) => task.id === selectedTask)[0]
              .subtasks.map((sub) => (
                <SubtaskWrapper key={sub.id}>
                  <CheckboxWrapper>
                    <HiddenCheckbox
                      key={sub.id}
                      id={sub.id}
                      onClick={() => {
                        dispatch(
                          editSubTask({
                            taskId: tasks.filter(
                              (task) => task.id === selectedTask
                            )[0].id,
                            subId: sub.id,
                          })
                        );
                        const task = tasks.find(
                          (t) =>
                            t.id ===
                            tasks.filter((task) => task.id === selectedTask)[0]
                              .id
                        );
                        task && setSelectedTask(task.id);
                      }}
                    />
                    <StyledCheckbox
                      htmlFor={sub.id}
                      completed={sub.completed}
                    />
                  </CheckboxWrapper>
                  <Subtask
                    children={sub.title}
                    completed={sub.completed}
                    key={sub.id}
                  />
                </SubtaskWrapper>
              ))}
          </WrapperTop>
          <SelectWrapper>
            <CurrentStatus children="current status" />
            <StatusSelect>
              {taskListName.map((name) => (
                <StatusOption>
                  <OptionWrapper>{name}</OptionWrapper>
                </StatusOption>
              ))}
            </StatusSelect>
          </SelectWrapper>
        </Container>
      )}
    </TaskSection>
  );
}

export default TaskListSection;
