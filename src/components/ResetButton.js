import styled from "styled-components";

import SubmitButton from "./SubmitButton";

const Reset = styled(SubmitButton)`
  position: relative;
  left: 216px;
`;

const ResetButton = () => {
  return (
    <Reset>리셋</Reset>
  );
}

export default ResetButton;