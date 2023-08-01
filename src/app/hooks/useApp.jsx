import { useNodesState, useEdgesState } from "reactflow";

import { convertDataIntoNodeEdgeFormat } from "../functions/convertDataIntoNodeEdgeFormat";
// import data from "../../data.json";
import data from "../../data.json";

const useApp = () => {
  const result = convertDataIntoNodeEdgeFormat(data);

  const connectionLineStyle = { stroke: "#fff" };
  const bgColor = "#1a192b";
  const defaultViewport = { x: 0, y: 0, zoom: 1 };

  const [nodes, , onNodesChange] = useNodesState(result);
  const [edges, , onEdgesChange] = useEdgesState(data.connections);
  return {
    connectionLineStyle,
    bgColor,
    defaultViewport,
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
  };
};

export default useApp;
