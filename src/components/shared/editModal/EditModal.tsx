//  EditModal Parts
import { EditModalWrapper, EditModalOption } from "./EditModalParts";

function EditModal({
  toggle,
  header,
  onEdit,
  onDelete,
}: {
  toggle: boolean;
  header: boolean;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <EditModalWrapper toggle={toggle} header={header}>
      <EditModalOption
        usage="edit"
        children={`edit ${header ? "board" : "task"}`}
        key="edit"
        onClick={onEdit}
      />
      <EditModalOption
        usage="delete"
        children={`delete ${header ? "board" : "task"}`}
        key="delete"
        onClick={onDelete}
      />
    </EditModalWrapper>
  );
}

export default EditModal;
