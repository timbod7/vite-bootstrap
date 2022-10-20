import { ReactChild } from "react";
import styled, { keyframes, css } from "styled-components";

const LOADING_SPIN = keyframes`
    from {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(360deg)
    }
`;

export const Button = styled.button<ButtonProps>`
  //default styles
  font-weight: ${props => style(props).fontWeight};
  color: ${props => color(props, 'normal')};
  background-color: ${props => bgcolor(props,'normal')};
  opacity: ${props => props.disabled ? "0.45" : undefined};
  border: none;
  border-radius: 0.25rem;
  padding: 0.75em  1.5em  0.75em  1.5em;
  margin: 0 0.5em 0 0;
  position: relative;
  box-shadow: 0 0 0 1px ${props => style(props).border} inset;
  &:hover {
    background-color: ${props => bgcolor(props,'hover')};
    color: ${props => color(props, 'hover')};
  }
  &:active {
    background-color: ${props => bgcolor(props,'active')};
    color: ${props => color(props, 'active')};
  }
  ${props => props.$loading && css`
  &:after {
    content: "";
    position: absolute;
    top: calc(50% - 0.6em);
    left: calc(50% - 0.6em);
    width: 1.2em;
    height: 1.2em;
    border-radius: 50%;
    border: 2px solid grey;
    border-top-color: white;
    animation: ${LOADING_SPIN} infinite linear 500ms;
  }
  `}
  ${props => props.basic && props.$loading && css`
    &:after {
      border: 2px solid rgba(0,0,0,0.1);
      border-top-color: grey;
    }
  `}
  ${props => props.basic && props.disabled && css`
  box-shadow: none;
  `}
`;

export interface ButtonProps {
  icon?: ReactChild,
  $loading?: boolean,    // Stupid name for an styled transient prop, to make styled components not pass the prop to the dom element.
  primary?: boolean,
  basic?: boolean,
}

function style(props: ButtonProps): ButtonStyle {
  if ( props.primary) {
    return PRIMARY;
  } else if (props.basic) {
    return BASIC;
  }
  return REGULAR;
}

function bgcolor(props: ButtonProps & {disabled?: boolean},  selector:'normal'|'hover'|'active'): string {
  const cs = style(props);
  if (props.disabled) {
    return cs.normal;
  }
  switch(selector) {
    case 'normal': return cs.normal;
    case 'hover': return cs.hover;
    case 'active': return cs.active;
  }
}

function color(props: ButtonProps & {loading?: boolean},  selector:'normal'|'hover'|'active'): string {
  const cs = style(props);
  if (!props.$loading) {
    return cs.text;
  }
  switch(selector) {
    case 'normal': return cs.normal;
    case 'hover': return cs.hover;
    case 'active': return cs.active;
  }
}

interface ButtonStyle {
  text: string,
  normal: string,
  hover: string,
  active: string,
  border: string,
  fontWeight: string,
};

const PRIMARY: ButtonStyle = {
  text: "white",
  normal: "#2185D0",
  border: "#2185D0",
  hover: "#1678c2",
  active: "#1a69a4",
  fontWeight: "normal",
}

const REGULAR: ButtonStyle = {
  text: "black",
  normal: "#e0e0e0",
  border: "#e0e0e0",
  hover: "#cacbcd",
  active: "#babbbc",
  fontWeight: "normal",

}

const BASIC: ButtonStyle = {
  text: "black",
  normal: "#ffffff",
  border: "#babbbc",
  hover: "#ffffff",
  active: "#babbbc",
  fontWeight: "normal",
}