import styled from "styled-components";
import beach from "../../images/beach.jpg";

const DesktopBackground = styled.div`
  background-image: url(${beach});
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default DesktopBackground;
