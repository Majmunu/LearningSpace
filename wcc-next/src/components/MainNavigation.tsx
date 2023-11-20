import Link from "next/link";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href={"/news"}>All News</Link>
          </li>
          <li>
            <Link href={"/news/add-meet"}>Add New News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
