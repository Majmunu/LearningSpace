import classes from "./MeetupDetail.module.css";
import { NextPage } from "next";

interface MeetupDetailProps {
  ID: string | undefined;
  Title: string | undefined;
  Image: string | undefined;
}

const MeetupDetail: NextPage<MeetupDetailProps> = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.Image} alt={props.Title} />
      <h1>{props.Title}</h1>
      <p>{props.Title}</p>
    </section>
  );
};

export default MeetupDetail;
