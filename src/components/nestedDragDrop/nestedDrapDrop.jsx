import React, { useEffect, useState, useContext } from "react";

import { ViewContext } from "../../context/viewContext/viewContext";
import Node from "../node/node";
import { getNodeByPath, setNodeByPath, removeNodeByPath } from "../../utils";
import { generateHTML } from "../../utils";
import DrawerCss from "../drawerCss";

const NestedDragDrop = ({ setHtmlString }) => {
  const { open, setOpen, nodes, setNodes } = useContext(ViewContext);
  const [nodesSlected, setNodesSlected] = useState(null);
  // const [nodes, setNodes] = useState(
  //   data || [
  //     {
  //       id: "1",
  //       title: "Node 1",
  //       type: "container",
  //       children: [],
  //     },
  //   ]
  // );

  useEffect(() => {
    const result = generateHTML(nodes[0].children);
    setHtmlString(result);
  }, [nodes]);

  const moveNode = (sourcePath, targetPath) => {
    const sourceNode = getNodeByPath(nodes, sourcePath);
    const newNodes = removeNodeByPath(nodes, sourcePath);
    const targetNode = getNodeByPath(newNodes, targetPath);
    if (!targetNode?.children) {
      targetNode.children = [];
    }
    targetNode.children.push(sourceNode);
    setNodes([...newNodes]);
  };

  const addNode = (parentPath, itemData) => {
    const newNode = {
      ...itemData,
      id: `${Math.random().toString(36).substr(2, 5)}`,
      title: `Node ${Math.random().toString(36).substr(2, 5)}`,
      children: [],
      path: [],
    };

    const parent = getNodeByPath(nodes, parentPath);
    if (!parent.children) {
      parent.children = [];
      newNode.path = parentPath.concat(0);
    } else {
      newNode.path = parentPath.concat(parent.children.length);
    }

    parent.children.push(newNode);
    setNodes([...nodes]);
  };

  const updateNodeByPath = (path, data) => {
    const newnodes = setNodeByPath(nodes, path, data);
    setNodes([...newnodes]);
  };

  const removeNode = (path) => {
   

    const newnodes = removeNodeByPath(nodes, path);
    setNodes([...newnodes]);
  };

  useEffect(() => {
    if (nodesSlected) {
      updateNodeByPath(nodesSlected?.path, nodesSlected);
    }
  }, [nodesSlected]);

  return (
    <div className=" w-full h-[100%] min-h-[360px]">
      {nodes?.map((node, index) => (
        <Node
          key={node.id}
          data={node}
          path={[index]}
          moveNode={moveNode}
          addNode={addNode}
          isSlected={nodesSlected ? nodesSlected.id === node.id : false}
          updateNodeByPath={updateNodeByPath}
          setNodesSlected={setNodesSlected}
          removeNodeByPath={removeNode}
          index={index}
        />
      ))}
      <DrawerCss
        open={open}
        setOpen={setOpen}
        properties={nodesSlected}
        setProperties={setNodesSlected}
      />
    </div>
  );
};

export default NestedDragDrop;
