import { Text } from "rebass";
import styled, { keyframes } from "styled-components";

const colorShadow = keyframes`
  50% {
    text-shadow: 0px 1px 9px rgb(73, 1, 119);
  }
`;

const DreamText = styled(Text)`
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  font-style: italic;
  font-stretch: semi-condensed;
  font-size: 2rem;
  transform: scale(1, 1.5);
  color: rgb(255, 30, 122);
  line-height: 1.3em;
  max-width: 38em;
  margin-bottom: 1.5em;
  text-shadow: 0px 1px 15px rgb(73, 1, 119);
  animation: ${colorShadow} 2s infinite;
`;

export default DreamText;
