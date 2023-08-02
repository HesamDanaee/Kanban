import styled from "styled-components";
import { Theme } from "@/styles/theme";

const SelectWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const CurrentStatus = styled.h2`
  align-self: flex-start;
  font-size: 12px;
  color: white;
  font-weight: 600;
  text-transform: capitalize;
`;

const StatusSelect = styled.select<{ theme: Theme }>`
  color: #fff;
  width: 100%;
  outline: none;
  border: 1px solid #ffffff81;
  background-color: transparent;
  font-size: 14px;
  text-transform: capitalize;
  padding: 0.5rem;

  margin-top: 0.5rem;
  border-radius: 3px;
  transition: border 0.1s ease;

  &:focus {
    border: 1px solid ${({ theme }) => theme.bg["purplish-blue"]};
  }
`;

const OptionWrapper = styled.span<{ theme: Theme }>`
  padding: 2.5rem;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.bg["dark-shade"]};
`;

const StatusOption = styled.option<{ theme: Theme }>`
  padding: 0.5rem;
  border: none;
  outline: none;

  background-color: ${({ theme }) => theme.bg["dark-shade"]};
`;

export {
  SelectWrapper,
  CurrentStatus,
  StatusSelect,
  OptionWrapper,
  StatusOption,
};
