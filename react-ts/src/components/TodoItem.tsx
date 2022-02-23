import React from "react";
import classes from "./TodoItem.module.css";

const Todo: React.FC<{ text: string; onClickItem: () => void }> = (props) => {
  return (
    <li onClick={props.onClickItem} className={classes.item}>
      {props.text}
    </li>
  );
};

export default Todo;
