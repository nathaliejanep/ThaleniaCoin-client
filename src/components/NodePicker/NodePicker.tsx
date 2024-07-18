import React, { ChangeEvent, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
interface Node {
  address: string;
}

interface NodePickerProps {
  nodes: Node[];
  setDynamicPort: (port: string) => void;
}

const NodePicker = ({ nodes, setDynamicPort }: NodePickerProps) => {
  const [selectedNode, setSelectedNode] = useState('');

  useEffect(() => {
    if (nodes.length > 0) setSelectedNode(nodes[0].address);
  }, []);

  const changeNode = (e: ChangeEvent<HTMLSelectElement>) => {
    const nodeNumber = e.target.value;
    setSelectedNode(nodeNumber);
    setDynamicPort(nodeNumber);
  };

  return (
    <div className='dropdown-wrapper'>
      <Form.Select
        value={selectedNode}
        onChange={changeNode}
      >
        {nodes.map((node, index) => {
          return (
            <option
              key={index}
              value={node.address}
            >
              Node {index + 1}: {node.address}
            </option>
          );
        })}
      </Form.Select>

      <p>You are running on Node: {selectedNode}</p>
    </div>
  );
};

export default NodePicker;
