import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchData = async (url: string): Promise<any> => {
  try {
    const { data } = await axiosInstance.get(url);
    return data.data.chain;
  } catch (err) {
    console.error(`Error: ${err} while fetching.`);
    return {};
  }
};

const fetchNodes = async () => {
  try {
    const response = await axiosInstance.get('/nodes');
    return response.data.nodes;
  } catch (err) {
    console.error(`Error fetching nodes: ${err}`);
    return [];
  }
};

const getBlockchain = async (dynamicPort: number): Promise<any> => {
  const DYNAMIC_URL = `http://localhost:${dynamicPort}/api/v1/blockchain`;
  return fetchData(DYNAMIC_URL);
};

interface TransactionData {
  // Define the structure of your transaction data here
  sender: string;
  recipient: string;
  amount: number;
}

const addTransaction = async (
  txData: any,
  dynamicPort: number,
  token: string
): Promise<any> => {
  const DYNAMIC_URL = `http://localhost:${dynamicPort}/api/v1/wallet/add`;
  try {
    const response = await axios.post(DYNAMIC_URL, txData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    console.error(`Error: ${err} while adding transaction.`);
    return {};
  }
};

const mineBlock = async (dynamicPort: number): Promise<any> => {
  const DYNAMIC_URL = `http://localhost:${dynamicPort}/api/v1/wallet/mine`;
  console.log(DYNAMIC_URL);
  try {
    const response = await axiosInstance.get(DYNAMIC_URL);
    return response.data;
  } catch (err) {
    console.error(`Error: ${err} while mining.`);
    return {};
  }
};

export { fetchNodes, getBlockchain, addTransaction, mineBlock };
