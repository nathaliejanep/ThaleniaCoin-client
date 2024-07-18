import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/AuthProvider';
import TransactionForm from '../components/TransactionForm/TransactionForm';
import BlockchainList from '../components/BlockchainList/BlockchainList';
import { fetchNodes } from '../services/api-service';
import NodePicker from '../components/NodePicker/NodePicker';

const Dashboard: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [nodes, setNodes] = useState([]);
  const [dynamicPort, setDynamicPort] = useState('');

  console.log(isAuthenticated);

  useEffect(() => {
    getNodes();
  }, []);

  const getNodes = async () => {
    try {
      const fetchedNodes = await fetchNodes();
      console.log(fetchedNodes);
      setNodes(fetchedNodes);
      if (fetchedNodes.length > 0) {
        const firstNodeAddress = fetchedNodes[0].address;

        setDynamicPort(firstNodeAddress);
      }
    } catch (err) {
      console.error(`Error fetching nodes: ${err}`);
    }
  };

  return (
    <>
      <h2>Transaction</h2>
      <NodePicker
        nodes={nodes}
        setDynamicPort={setDynamicPort}
      />
      <TransactionForm />
      <BlockchainList dynamicPort={dynamicPort} />
    </>
  );
};

export default Dashboard;
