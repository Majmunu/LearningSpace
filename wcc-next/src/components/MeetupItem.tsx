"use client";
import { useRouter } from "next/navigation";

import Card from "./ui/Card";
import classes from "./MeetupItem.module.css";
import { NextPage } from "next";

interface MeetupItemProps {
  ID: string | undefined;
  Title: string | undefined;
  Image: string | undefined;
}

const MeetupItem: NextPage<MeetupItemProps> = (props) => {
  const router = useRouter();
  console.log(props);

  function showDetailsHandler() {
    router.push("/" + props.ID);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.Image} alt={props.Title} />
        </div>
        <div className={classes.content}>
          <h3>{props.Title}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
