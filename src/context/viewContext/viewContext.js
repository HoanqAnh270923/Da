import React, { createContext, useState } from "react";

export const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [nodes, setNodes] = useState([
    {
      id: "1",
      title: "Node 1",
      type: "container",
      children: [],
    },
  ]);
  const [view, setView] = useState({
    category: "main",
    tagId: null,
    itemId: "",
  });

  return (
    <ViewContext.Provider
      value={{ view, setView, open, setOpen, nodes, setNodes }}
    >
      {children}
    </ViewContext.Provider>
  );
};
