import { ReactFlow, Controls } from "reactflow";
import "./App.css";
import "reactflow/dist/style.css";
import useApp from "../hooks/useApp";


function App() {
  const {
    connectionLineStyle,
    bgColor,
    defaultViewport,
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
  } = useApp();

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
