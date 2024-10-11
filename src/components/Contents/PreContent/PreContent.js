import React, { useState, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";
import "./PreContent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

export default function PreContent() {
  const [droppedItems, setDroppedItems] = useState([]);

  // Xóa item theo index ở trong mảng
  function deleteItem(index) {
    const newItems = droppedItems.filter((_, i) => i !== index);
    setDroppedItems(newItems);
  }

  const deleteAll = () => {
    setDroppedItems([]);
  };

  useEffect(() => {
    if (droppedItems.length > 0) {
      document.querySelector(".keothe").style.display = "none";
    } else {
      document.querySelector(".keothe").style.display = "block";
    }
  }, [droppedItems]);

  return (
    <div className="pre_content">
      <h3 className="keothe">Kéo thẻ vào đây</h3>
      <FontAwesomeIcon className="x" onClick={deleteAll} icon={faX} />
      <ReactSortable
        list={droppedItems}
        setList={setDroppedItems}
        group={{ name: "shared", pull: false, put: true }}
        className="dropitems"
      >
        {droppedItems.map((item, index) => (
          <div key={index} className="dropped-item">
            {item.name}
            <FontAwesomeIcon
              className="trash"
              icon={faTrash}
              onClick={(e) => {
                e.stopPropagation();
                deleteItem(index);
              }}
            />
            {/* {item.id} */}
            <div className="text">
              <input type="text" id={index} placeholder="Nhập nội dung" />
            </div>
          </div>
        ))}
      </ReactSortable>
    </div>
  );
}
