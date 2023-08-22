import styled from "styled-components";
import { Theme } from "@/styles/theme";
//  Select Input

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

const StatusSelect = styled.div<{ theme: Theme }>`
  position: relative;
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
  &:hover {
    cursor: pointer;
  }
`;

const StatusOption = styled.div<{ theme: Theme; firstLast?: boolean }>`
  display: inline-block;
  width: 100%;
  height: auto;
  padding: 0.5rem;
  border: none;
  outline: none;
  transition: all 0.1s ease-in;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  &:hover {
    cursor: pointer;
    border-top: ${({ firstLast }) => firstLast && "1px solid white"};
    border-bottom: ${({ firstLast }) => firstLast && "1px solid white"};
    background-color: ${({ theme }) => theme.bg["steel-blue"]};
  }
`;

const OptionWrapper = styled.div<{ theme: Theme }>`
  width: 100%;
  height: auto;
  position: absolute;
  top: 110%;
  left: 0;
  background-color: ${({ theme }) => theme.bg["dark-shade"]};
  border-radius: 5px;
  border: 1px solid white;
`;

export {
  SelectWrapper,
  CurrentStatus,
  StatusSelect,
  OptionWrapper,
  StatusOption,
};
