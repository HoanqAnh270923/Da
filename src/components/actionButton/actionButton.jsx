import {
  faEye,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

const style = {
  backgroundColor: "transparent",
  border: "none",
  fontSize: "18px",
  fontWeight: "300",
  color: "#ccc",
  cursor: "pointer",
};

export default function ActionButton(props) {
  let ICON = <FontAwesomeIcon color="#475467" icon={faEye} />;
  const { type, onClick } = props;
  if (type === "remove")
    ICON = <FontAwesomeIcon color="#475467" icon={faTrashCan} />;
  if (type === "edit")
    ICON = <FontAwesomeIcon color="#475467" icon={faPenToSquare} />;
  return (
    <button
      style={style}
      onClick={(e) => {
        onClick ? onClick(e) : alert(`Tính năng đang cập nhật`);
      }}
    >
      {ICON}
    </button>
  );
}
