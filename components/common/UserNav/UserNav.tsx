import { FC } from "react";
import Link from "next/link";
import style from "./usernav.module.css";
import { Bag as Card, Heart } from "@components/icons";

const UserNav: FC = function () {
  return (
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          <Card />
        </li>
        <li className={style.item}>
          <Link href={"/"}>
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
