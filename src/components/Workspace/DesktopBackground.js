import styled from "styled-components";
import beach from "../../images/beach.jpg";

const DesktopBackground = styled.div`
  background-image: url(${beach});
  height: 600px;
  background-position: center center;
  background-size: cover;
  position: relative;
`;

export default DesktopBackground;
