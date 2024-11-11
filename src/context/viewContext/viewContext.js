import React, { createContext, useState } from "react";

export const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState({
    category: "main",
    tagId: null,
    itemId: "",
  });

  return (
    <ViewContext.Provider value={{ view, setView, open, setOpen }}>
      {children}
    </ViewContext.Provider>
  );
};
