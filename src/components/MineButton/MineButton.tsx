import React from 'react';
import { Button } from 'react-bootstrap';
import { mineBlock } from '../../services/api-service';

const MineButton = ({ dynamicPort }: any) => {
  const handleMineBlock = async () => {
    try {
      await mineBlock(dynamicPort);
      console.log(dynamicPort);
    } catch (err) {
      console.error('Error while mining:', err);
    }
  };
  return (
    <Button
      variant='primary'
      onClick={handleMineBlock}
    >
      Mine Blockchain
    </Button>
  );
};

export default MineButton;
