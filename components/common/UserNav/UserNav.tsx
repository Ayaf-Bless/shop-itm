import { FC } from "react";
import Link from "next/link";
import style from "./usernave.module.css";

const UserNav: FC = function () {
  return (
    <nav>
      <ul className={style.list}>
        <li className={style.item}>Card</li>
        <li className={style.item}>
          <Link href={"/"}>
            <a>wishList</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
