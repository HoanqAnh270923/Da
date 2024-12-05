import React from "react";
import { useDrag } from "react-dnd";
import { Tooltip } from "antd";

const ItemTypes = {
  NODE: "node",
  SIDEBAR_ITEM: "sidebar_item",
};

const SidebarItem = ({ item, children }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.SIDEBAR_ITEM,
    item: { type: ItemTypes.SIDEBAR_ITEM, itemData: item },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`
            p-3 m-2 rounded-lg shadow-sm cursor-move
            ${isDragging ? "opacity-50" : "opacity-100"}
            bg-white border border-gray-200 hover:border-blue-300
          `}
    >
      <Tooltip title={item.content} placement="right">
        <div className="flex items-center gap-2">
          {item.icon && <span className="text-lg">{item.icon}</span>}
          <span className="font-medium select-none text-black overflow-hidden text-ellipsis">
            {item.name}
          </span>
        </div>
      </Tooltip>
    </div>
  );
};

export default SidebarItem;
