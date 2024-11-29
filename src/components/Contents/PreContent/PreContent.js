import React, { useState, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";
import "./PreContent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faX, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { generateHTML } from "../../../utils";
import DrawerCss from "../../drawerCss";

export default function PreContent({ setHtmlString }) {
  const [droppedItems, setDroppedItems] = useState([]);
  const [isDropDisabled, setIsDropDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
  

    let result = generateHTML(droppedItems);
    setHtmlString(result);
  }, [droppedItems]);

  // Xóa item theo index
  function deleteItem(index) {
    const newItems = droppedItems.filter((item, i) => i !== index);
    setDroppedItems(newItems);
  }

  // Xóa một thẻ con
  function deleteChild(parentIndex, childIndex) {
    const updatedItems = [...droppedItems];
    updatedItems[parentIndex].children = updatedItems[
      parentIndex
    ].children.filter((_, i) => i !== childIndex);
    setDroppedItems(updatedItems);

    if (updatedItems[parentIndex].children.length === 0) {
      setIsDropDisabled(false);
    }
  }

  const deleteAll = () => {
    setDroppedItems([]);
    setIsDropDisabled(false);
  };

  const handleProperty = (property) => {
    const updatedItems = [...droppedItems];
    updatedItems[selectedItem] = property;
    setDroppedItems(updatedItems);
  };

  useEffect(() => {
    if (droppedItems.length > 0) {
      document.querySelector(".keothe").style.display = "none";
    } else {
      document.querySelector(".keothe").style.display = "block";
    }
  }, [droppedItems]);

  function showcontentbtn(item) {
    const show = document.getElementById("showcontent");
    show.querySelector("h3").textContent = `Thẻ: ${item.name}`;
    show.querySelector("p").textContent = item.content || "Không có nội dung";

    if (show.classList.contains("show")) {
      show.classList.remove("show");
    } else {
      show.classList.add("show");
    }
  }

  function exit() {
    const show = document.getElementById("showcontent");
    show.classList.remove("show");
  }

  // Render các thẻ con (nested items)
  function renderNestedSortable(item, index) {
    return (
      <ReactSortable
        list={item.children || []}
        setList={(newChildren) => {
          const updatedItems = [...droppedItems];
          updatedItems[index].children = newChildren;
          setDroppedItems(updatedItems);

          if (newChildren.length > 0) {
            setIsDropDisabled(true);
            
          } else {
            setIsDropDisabled(false);
          }
        }}
        group={{ name: "nested", pull: true, put: true }}
        className="nested-dropitems"
      >
        {item.children && item.children.length > 0 ? (
          item.children.map((child, childIndex) => (
            <div key={childIndex} className="dropped-child">
              <span>{child.name}</span>
              <input
                type="text"
                placeholder="Nhập nội dung"
                className="child-input"
              />

              <FontAwesomeIcon
                className="child-trash"
                icon={faTrash}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteChild(index, childIndex); // Xóa thẻ con theo index
                }}
              />
            </div>
          ))
        ) : (
          <div className="area-child-drop"></div>
        )}
      </ReactSortable>
    );
  }

  return (
    <div className="pre_content">
      <h3 className="keothe">Kéo thẻ vào đây</h3>
      <FontAwesomeIcon className="x" onClick={deleteAll} icon={faX} />
      <ReactSortable
        list={droppedItems}
        setList={setDroppedItems}
        group={{ name: "shared", pull: false, put: !isDropDisabled }}
        className="dropitems"
        disabled={isDropDisabled}
      >
        {droppedItems.map((item, index) => (
          <div
            key={index}
            className={`dropped-item ${
              item.children && item.children.length > 0 ? "has-children" : ""
            }`}
          >
            <div className="item-header">{item.name}</div>
            <div>
              <FontAwesomeIcon
                color="#475467"
                icon={faPenToSquare}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(true);
                  setSelectedItem(index);
                }}
              />
              <FontAwesomeIcon
                className="trash"
                icon={faTrash}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteItem(index);
                  setIsDropDisabled(false);
                }}
              />
            </div>

            {/* Render vùng thả và các thẻ con */}
            {renderNestedSortable(item, index)}

            <div className="text">
              <input type="text" id={index} placeholder="Nhập nội dung" />
            </div>
            <div className="itemcontent">
              <button className="btn" onClick={() => showcontentbtn(item)}>
                Mô Tả
              </button>
            </div>
          </div>
        ))}
      </ReactSortable>

      <div id="showcontent" className="showcontent">
        <FontAwesomeIcon className="x" onClick={exit} icon={faX} />
        <h3 className="title"></h3>
        <p className="pcontent"></p>
      </div>

      {/* Drawercss */}
      <DrawerCss
        open={open}
        setOpen={setOpen}
        properties={droppedItems[selectedItem]}
        setProperties={handleProperty}
      />
    </div>
  );
}
