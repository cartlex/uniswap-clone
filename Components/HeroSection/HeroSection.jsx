import Image from "next/image";

//INTERNAL 
import images from "../../assets";
import Style from "./HeroSection.module.css";
import { TokenList, SearchToken } from "../index";
import { useState } from "react";
const HeroSection = ({accounts, tokenData}) => {
    const [openSetting, setOpenSetting] = useState(false);
    const [openToken, setOpenToken] = useState(false);
    const [openTokenTwo, setopenTokenTwo] = useState(false);

    const [tokenOne, setTokenOne] = useState({
        name: "",
        image: "",
    });

    const [tokenTwo, setTokenTwo] = useState({
        name: "",
        image: "",
    });
  return <div className={Style.HeroSection}>HeroSection</div>;
};

export default HeroSection;
