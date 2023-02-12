import React from "react";

export interface ButtonProps {
  index: any;
  url: string;
  name: string;
}

const colors = ["#01408c", "#E07A5F", "#005c2c", "#ab3303", "#0d0c42"];

export const Button = (props: ButtonProps) => {
  const backgroundStyle = {
    backgroundColor: colors[props.index],
  };
  return (
    <a
      href={props.url}
      className="button"
      target={"_blank"}
      style={backgroundStyle}
    >
      {props.name}
    </a>
  );
};
