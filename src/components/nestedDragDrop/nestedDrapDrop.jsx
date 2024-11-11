import React, { useEffect, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Node from "../node/node";
import { getNodeByPath, setNodeByPath, removeNodeByPath } from "../../utils";
import { generateHTML } from "../../utils";

const NestedDragDrop = () => {
  const [nodesSlected, setNodesSlected] = useState(null);
  const [nodes, setNodes] = useState([
    {
      id: "1",
      title: "Node 1",
      type: "container",
      children: [],
    },
  ]);

  useEffect(() => {
    const result = generateHTML(nodes[0].children);
    console.log(result);
  }, [nodes]);

  const moveNode = (sourcePath, targetPath) => {
    const sourceNode = getNodeByPath(nodes, sourcePath);
    const newNodes = removeNodeByPath(nodes, sourcePath);
    const targetNode = getNodeByPath(newNodes, targetPath);
    if (!targetNode.children) {
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
    };

    const parent = getNodeByPath(nodes, parentPath);
    if (!parent.children) {
      parent.children = [];
    }
    parent.children.push(newNode);
    setNodes([...nodes]);
  };

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
        />
      ))}
    </div>
  );
};

export default NestedDragDrop;
