import { useState } from "react";

import { Task } from "@/types/newTask";

interface Item {
  id: number;
  text: string;
}

interface DragAndDropHook {
  items: Task[];
  draggedItem: Task | null;
  handleDragStart: (item: Task) => void;
  handleDrop: (item: Task) => void;
}

function useDragAndDrop(initialItems: Task[]) {
  //   const [items, setItems] = useState<Task[]>(initialItems);
  //   const [draggedItem, setDraggedItem] = useState<Task | null>(null);
  //   const handleDragStart = (item: React.DragEvent<HTMLDivElement>) => {
  //  console.log(\hey)
  //   };
  //   const handleDrop = (droppedItem: Task) => {
  //     const updatedItems = items.map((item) =>
  //       item.id === droppedItem.id ? draggedItem! : item
  //     );
  //     setItems(updatedItems);
  //     setDraggedItem(null);
  //   };
  //   return { items, draggedItem, handleDragStart, handleDrop };
}

export default useDragAndDrop;
