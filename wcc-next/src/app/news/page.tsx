import { Fragment } from "react";
import { NextPage } from "next";

interface NewsProps {}

const News: NextPage<NewsProps> = (props) => {
  return (
    <Fragment>
      <h1>我是news</h1>
    </Fragment>
  );
};
export default News;
