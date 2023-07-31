import { ReactFlow, Controls, useNodesState, useEdgesState } from "reactflow";
import "./App.css";
import "reactflow/dist/style.css";
import { convertDataIntoNodeEdgeFormat } from "./functions/convertDataIntoNodeEdgeFormat";

import data from "./data.json";
// import { convertToReactFlowNodes } from "./convertNode";

function App() {
  const n = convertDataIntoNodeEdgeFormat(data);
  console.log("info:convertDataIntoNodeEdgeFormat ", n);

  const connectionLineStyle = { stroke: "#fff" };
  const bgColor = "#1a192b";
  const defaultViewport = { x: 0, y: 0, zoom: 1 };

  const [nodes, , onNodesChange] = useNodesState(n);
  const [edges, , onEdgesChange] = useEdgesState(data.connections);
  return (
    <div id="parent">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        style={{ background: bgColor }}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={false}
        defaultViewport={defaultViewport}
        fitView
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
