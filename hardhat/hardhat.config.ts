import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
        forking: {
            // url: "asdsassasd",
            url: `${process.env.ALCHEMY_API}`,

        }
        
    }
  },
  etherscan: {
    apiKey: process.env.POL_SCAN_API_KEY, // for verification
  },
};

export default config;
