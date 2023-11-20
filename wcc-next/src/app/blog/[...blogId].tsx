import React, { Fragment } from "react";
import { useRouter } from "next/router";

interface BlogItemProps {}

const BlogItem: React.FC<BlogItemProps> = (props) => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Fragment>
      <h1>hello word!</h1>
    </Fragment>
  );
};
export default BlogItem;
