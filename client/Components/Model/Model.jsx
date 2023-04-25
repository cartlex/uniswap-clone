import Image from "next/image";

import Style from "./Model.module.css";
import images from "../../assets";

const Model = ({ setOpenModel, connectWallet }) => {
  const walletMenu = ["MetaMask", "Coinbase", "Wallet", "WalletConnect"];

  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        <div className={Style.Model_box_heading}>
          <p>Connect wallet</p>
          <div className={Style.Model_box_heading_img}>
            <Image
              src={images.close}
              alt="close"
              width={50}
              height={50}
              onClick={() => setOpenModel(false)}
            />
          </div>
        </div>
        <div className={Style.Model_box_wallet}>
          {walletMenu.map((el, i) => (
            <p key={i + 1} onClick={() => connectWallet()}>
              {el}
            </p>
          ))}
        </div>
        <p className={Style.Model_box_para}>
            By connecting a wallet, you agree to Uniswap Labs'
            <br/> Terms of Service and consent to its Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Model;
