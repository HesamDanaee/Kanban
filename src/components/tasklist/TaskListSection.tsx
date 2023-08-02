// Global Imports
import { useDispatch } from "react-redux";
// Local Imports

import {
  TaskSection,
  TaskList,
  StatusWrapper,
  ListStatus,
  ListStasusIcon,
  TaskWrapper,
  TitleTxt,
  DescriptionTxt,
  Subtasktxt,
  Container,
  ContainerBackspace,
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
  NewColumn,
  NewColumnTxt,
} from "./TaskParts";

//  Shared Components

import { Task, SubtaskT } from "@/types/newTask.modal";

// Selectors
import { changeStatus } from "@/features/Tasks/taskSlice";
import { checkSubtask } from "@/features/subtasks/subtaskSlice";

interface TaskListSectionProps {
  taskListName: string[];
  tasks: Task[];
  subtasks: SubtaskT[];
  toggleModal: (taskId: boolean) => void;
  selectedTask: Task;
  openModal: boolean;
  setSelectedTask: (id: string) => void;
  toggle: boolean;
}

function TaskListSection({
  taskListName,
  tasks,
  subtasks,
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
          const subtask = subtasks.filter((sub) => sub.taskId === list.id);
          const completeds = subtask.filter((sub) => sub.completed === true);
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
                children={`${completeds.length} of ${subtask.length} subtasks`}
              />
            </TaskWrapper>
          );
        });

        return (
          <TaskList>
            <StatusWrapper>
              <ListStasusIcon status={name} />
              <ListStatus children={`${name} (${list.length})`} />
            </StatusWrapper>
            {mappedList}
          </TaskList>
        );
      })}
      <NewColumn>
        <NewColumnTxt children="+ new column" />
      </NewColumn>

      {/*  Modal  */}
      {openModal && (
        <>
          {" "}
          <ContainerBackspace />
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
                  subtasks.filter(
                    (sub) =>
                      sub.taskId === selectedTask.id && sub.completed === true
                  ).length
                } of ${
                  subtasks.filter((sub) => sub.taskId === selectedTask.id)
                    .length
                }`}
              />
              {subtasks.map(
                (sub) =>
                  sub.taskId === selectedTask.id && (
                    <SubtaskWrapper key={sub.id}>
                      <CheckboxWrapper>
                        <HiddenCheckbox
                          key={sub.id}
                          id={sub.id}
                          onClick={() => {
                            dispatch(checkSubtask(sub.id));

                            // const task = tasks.find(
                            //   (t) => t.id === selectedTask.id
                            // );
                            // task && setSelectedTask(task.id);
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
                  )
              )}
            </WrapperTop>
            <SelectWrapper>
              <CurrentStatus children="current status" />
              <StatusSelect
                onChange={(e) => {
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
        </>
      )}
    </TaskSection>
  );
}

export default TaskListSection;
