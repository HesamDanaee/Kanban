import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import EditTaskModal from "./CETaskModal";

describe("EditTaskModal", () => {
  it("renders properly with initial state", () => {
    render(
      <EditTaskModal
        listName={["List 1", "List 2"]}
        stage="Stage 1"
        taskId="task-123"
        toggle={true}
        usage="edit"
        boardId="board-456"
      />
    );

    expect(screen.getByText(/edit task/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/taskname/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/description/i)).toBeDefined();
  });

  it("handles input changes and save button correctly", () => {
    render(
      <EditTaskModal
        listName={["List 1", "List 2"]}
        stage="Stage 1"
        taskId="task-123"
        toggle={true}
        usage="edit"
        boardId="board-456"
      />
    );

    const titleInput = screen.getByPlaceholderText("taskname");
    const descriptionInput = screen.getByPlaceholderText("description");
    const saveButton = screen.getByText("edit task");

    fireEvent.change(titleInput, { target: { value: "New Task Title" } });
    fireEvent.change(descriptionInput, {
      target: { value: "New Task Description" },
    });

    expect(titleInput.ariaValueText).toBe("New Task Title");
    expect(descriptionInput.ariaValueText).toBe("New Task Description");

    // userEvent.click(saveButton)
  });
});
