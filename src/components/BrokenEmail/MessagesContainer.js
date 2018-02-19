import styled from "styled-components";

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 3px double rgba(0, 0, 0, 1);
  margin: 25px 10px 0;
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: 300px;
  overflow: hidden;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  background-color: rgba(255, 255, 255, 0.8);
`;
export default MessagesContainer;
