import { Fragment } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface DetailProps {}

const Detail: NextPage<DetailProps> = (props) => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return (
    <Fragment>
      <h1>detail</h1>
    </Fragment>
  );
};
export default Detail;
