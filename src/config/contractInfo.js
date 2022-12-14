import dotenv from "dotenv";
dotenv.config();

export default {
  80001: {
    currency: {
      USDT: "0x742DfA5Aa70a8212857966D491D67B09Ce7D6ec7",
      USDC: "0x21C561e551638401b937b03fE5a0a0652B99B7DD",
      TUSD: "0x9aa7fEc87CA69695Dd1f879567CcF49F3ba417E2",
    },
    rpc: process.env.MUMBAI_RPC,
    contract: "0x0ff9092e55d9f6CCB0DD4C490754811bc0839866",
  },
};
