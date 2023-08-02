import { EditModalWrapper, EditModalOption } from "./EditModalParts";

function EditModal({ toggle }: { toggle: boolean }) {
  return (
    <EditModalWrapper toggle={toggle}>
      <EditModalOption usage="edit" children="edit board" key="edit" />
      <EditModalOption usage="delete" children="delete board" key="delete" />
    </EditModalWrapper>
  );
}

export default EditModal;
