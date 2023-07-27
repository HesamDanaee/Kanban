// Global Imports
import { useDispatch } from "react-redux";
// Local Imports

import {
  TaskSection,
  TaskList,
  ListStatus,
  TaskWrapper,
  TitleTxt,
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
import { editSubTask, changeStatus } from "@/features/Tasks/taskSlice";

interface TaskListSectionProps {
  taskListName: string[];
  tasks: Task[];
  toggleModal: (taskId: boolean) => void;
  selectedTask: Task;
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
              <TitleTxt modal={false} children={list.title} />
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
          <TitleTxt children={selectedTask.title} modal={true} />
          <DescriptionTxt children={`${selectedTask.description}`} />

          <WrapperTop>
            <Subtasktxt
              modal={true}
              children={`Subtasks ${
                selectedTask.subtasks.filter((sub) => sub.completed === true)
                  .length
              } of ${selectedTask.subtasks.length}`}
            />
            {selectedTask.subtasks.map((sub) => (
              <SubtaskWrapper key={sub.id}>
                <CheckboxWrapper>
                  <HiddenCheckbox
                    key={sub.id}
                    id={sub.id}
                    onClick={() => {
                      dispatch(
                        editSubTask({
                          taskId: tasks.filter(
                            (task) => task.id === selectedTask.id
                          )[0].id,
                          subId: sub.id,
                        })
                      );
                      const task = tasks.find((t) => t.id === selectedTask.id);
                      task && setSelectedTask(task.id);
                    }}
                  />
                  <StyledCheckbox htmlFor={sub.id} completed={sub.completed} />
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
            <StatusSelect
              onChange={(e) => {
                console.log("working");
                dispatch(
                  changeStatus({
                    taskId: selectedTask.id,
                    status: e.target.value,
                  })
                );
              }}
            >
              {taskListName.map((name) => (
                <StatusOption selected={selectedTask.stage === name}>
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
