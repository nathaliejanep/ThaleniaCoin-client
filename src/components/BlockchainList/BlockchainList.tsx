import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { getBlockchain } from '../../services/api-service';
import MineButton from '../MineButton/MineButton';

// interface BlockchainListProps {
//   blockchain: Block[];
// }
interface Transaction {
  id: string;
  input: {
    timestamp: number;
    amount: number;
    address: string;
    signature: {
      r: any;
      s: any;
      recoveryParam: number;
    };
  };
  outputMap: { [key: string]: number };
}
const BlockchainList = ({ dynamicPort }: any) => {
  const [blockchain, setBlockchain] = useState<any[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchBlockchainData = async () => {
      try {
        const blockchainData = await getBlockchain(3000);

        setBlockchain(blockchainData);
      } catch (error) {
        console.error('Error fetching blockchain data:', error);
      }
    };

    fetchBlockchainData();
  }, []);

  useEffect(() => {
    const transactionList: Transaction[] = [];
    if (blockchain && Array.isArray(blockchain)) {
      blockchain.forEach((block) => {
        if (block && block.data && Array.isArray(block.data)) {
          block.data.forEach((tx: any) => {
            if (tx && tx.id && tx.input && tx.outputMap) {
              const { id, input, outputMap } = tx;
              transactionList.push({ id, input, outputMap });
            }
          });
        }
      });
      setTransactions(transactionList);
    }
  }, [blockchain]);

  return (
    <>
      <MineButton dynamicPort={dynamicPort} />
      <Table
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>Index</th>
            <th>Timestamp</th>
            <th>Hash</th>
            <th>Previous Hash</th>
          </tr>
        </thead>

        <tbody>
          {blockchain.map((block) => (
            <tr key={block.index}>
              <td>{block.index}</td>
              <td>{new Date(block.timestamp).toLocaleString()}</td>
              <td>{block.hash}</td>
              <td>{block.previousHash}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Table
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Sender</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 &&
            transactions.map((tx) => (
              <React.Fragment key={tx.id}>
                {Object.entries(tx.outputMap).map(([recipient, amount]) => (
                  <tr key={`${tx.id}-${recipient}`}>
                    <td>{tx.id}</td>
                    <td>{new Date(tx.input.timestamp).toLocaleString()}</td>
                    <td>{amount}</td>
                    <td>{recipient}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default BlockchainList;
