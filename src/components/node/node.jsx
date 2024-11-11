import React, { useState, useCallback, useContext } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { ViewContext } from "../../context/viewContext/viewContext";

import DrawerCss from "../drawerCss";

const ItemTypes = {
  NODE: "node",
  SIDEBAR_ITEM: "sidebar_item",
};

const Node = ({ data, path, moveNode, addNode, isSlected }) => {
  const { open, setOpen } = useContext(ViewContext);

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.NODE,
    item: { type: ItemTypes.NODE, path },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: [ItemTypes.NODE, ItemTypes.SIDEBAR_ITEM],
    drop: (item, monitor) => {
      if (monitor.didDrop()) return;

      if (item.type === ItemTypes.NODE) {
        if (JSON.stringify(item.path) !== JSON.stringify(path)) {
          moveNode(item.path, path);
        }
      } else if (item.type === ItemTypes.SIDEBAR_ITEM) {
        addNode(path, item.itemData);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
    }),
  });

  const dragDropRef = useCallback(
    (node) => {
      drag(drop(node));
    },
    [drag, drop]
  );

  if (path.length === 1) {
    return (
      <div
        ref={dragDropRef}
        className={`h-full min-h-[360px]  w-full rounded-lg shadow-md cursor-move bg-transparent  `}
        style={{ minWidth: "200px", touchAction: "none" }}
      >
        <div className="flex flex-col justify-center items-center w-full px-4">
          {data.children?.map((child, index) => (
            <Node
              key={child.id}
              data={child}
              path={[...path, index]}
              moveNode={moveNode}
              addNode={addNode}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={dragDropRef}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        setOpen(true);
      }}
      className={`
          p-4 m-2 w-full rounded-lg shadow-md cursor-move
          ${isOver ? "bg-blue-50" : "bg-white"}
          ${isDragging ? "opacity-50" : "opacity-100"}
          ${isDragging ? "pointer-events-none" : "pointer-events-auto"}
          border-2 ${
            isOver || isSlected ? "border-blue-300" : "border-gray-200"
          }
          ${isOver ? "h-[150%]" : "h-auto"}
        `}
      style={{ minWidth: "200px" }}
    >
      <div className="flex items-center gap-2 mb-2">
        {data.icon && <span className="text-lg">{data.icon}</span>}
        <span className="font-medium select-none">{data.name}</span>
      </div>

      <div className="ml-6">
        {data.children?.map((child, index) => (
          <Node
            key={child.id}
            data={child}
            path={[...path, index]}
            moveNode={moveNode}
            addNode={addNode}
          />
        ))}
      </div>
      <DrawerCss
        open={open}
        setOpen={setOpen}
        properties={data}
        setProperties={() => {
          console.log("setProperties");
        }}
      />
    </div>
  );
};

export default Node;
