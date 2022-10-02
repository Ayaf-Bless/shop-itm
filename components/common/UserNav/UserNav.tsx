import { FC } from "react";
import Link from "next/link";
import style from "./usernav.module.css";
import { Bag as Card, Heart } from "@components/icons";
import { useUI } from "@components/ui/context";

const UserNav: FC = function () {
  const ui = useUI();
  return (
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          <Card onClick={ui.openSidebar} />
        </li>
        <li className={style.item}>
          <Link href={"/whishlist"}>
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
