// Global Imports

import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

// Local Imports

import {
  SelectWrapper,
  CurrentStatus,
  StatusSelect,
  StatusOption,
  OptionWrapper,
} from "./StatusParts";

import { changeStatus, setSelectedStage } from "@/features/Tasks/taskSlice";

// Types
import { Stage } from "@/features/Tasks/taskSlice";

function Status({
  listName,
  stage,
  taskId,
  toggleStatus,
  handleToggleStatus,
}: {
  listName: Stage[];
  stage: string;
  taskId: string;
  toggleStatus: boolean;
  handleToggleStatus: (state: boolean) => void;
}) {
  const [selectedValue, setSelectedValue] = useState(stage);

  const dispatch = useDispatch();

  const handleSelectedValue = (selected: string) => {
    setSelectedValue(selected);
  };

  return (
    <SelectWrapper onClick={(e) => e.stopPropagation()}>
      <CurrentStatus children="current status" />
      <StatusSelect onClick={() => handleToggleStatus(!toggleStatus)}>
        {selectedValue ? selectedValue : listName[0].name}
        {toggleStatus && (
          <OptionWrapper>
            {listName.map((stage, index) => (
              <StatusOption
                key={uuid()}
                firstLast={index !== 0 && index !== listName.length - 1}
                onClick={() => {
                  handleSelectedValue(stage.name);
                  dispatch(setSelectedStage(stage.name));
                  dispatch(
                    changeStatus({
                      taskId,
                      status: stage.name,
                    })
                  );
                }}
              >
                {stage.name}
              </StatusOption>
            ))}
          </OptionWrapper>
        )}
      </StatusSelect>
    </SelectWrapper>
  );
}

export default Status;
