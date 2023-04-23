//External imports

import Link from "next/link";
import Image from "next/image";

//Internal imports
import Style from "./NavBar.module.css";
import { Model, TokenList } from "../index";
import { useState } from "react";
import { images } from "../../assets";

const NavBar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "/",
    },
    {
      name: "Tokens",
      link: "/",
    },
    {
      name: "Pools",
      link: "/",
    },
  ];

  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_Box}>
        <div className={Style.NavBar_box_left}>
          <div className={Style.NavBax_box_left_img}>
            <Image src={images.uniswap} alt="logo" width={50} height={50} />
          </div>
        </div>
        <div className={Style.NavBar_box_left_menu}>
          {menuItems.map((el, i) => (
            <Link
              key={i + 1}
              href={{ pathname: `${el.name}`, query: `${el.link}` }}
            >
              <p className={Style.NavBar_box_left_menu_item}>{el.name}</p>
            </Link>
          ))}
        </div>

        <div className={Style.NavBar_box_right}>Right</div>
      </div>
    </div>
  );
};

export default NavBar;
