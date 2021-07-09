const getContract = (abi: any, address: any, web3: any) => {
  return new web3.eth.Contract(abi, address);
};

export const getCoreContract = (address: string, web3: any) => {
  return getContract("ABI", address, web3);
};