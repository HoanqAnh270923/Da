import React, { useState, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";
import "./PreContent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faX } from "@fortawesome/free-solid-svg-icons";

export default function PreContent() {
  const [droppedItems, setDroppedItems] = useState([]);

  // Xóa item theo index
  function deleteItem(index) {
    // Tao mang moi tru phan tu co key la index
    const newItems = droppedItems.filter(function (item, i) {
      return i !== index; // giu lai phan tu ko phai la index
    });

    // cpa nhat lai mang
    setDroppedItems(newItems);
  }

  // xoa toan bo item trong mang
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

  // Show content
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

  useEffect(() => {
    console.log(droppedItems);
  }, [droppedItems]);
  return (
    <div className="pre_content">
      <h3 className="keothe">Kéo thẻ vào đây</h3>
      <FontAwesomeIcon className="x" onClick={deleteAll} icon={faX} />
      <ReactSortable
        list={droppedItems}
        setList={setDroppedItems}
        group={{ name: "shared", pull: false, put: true, swap: "true" }}
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
    </div>
  );
}
