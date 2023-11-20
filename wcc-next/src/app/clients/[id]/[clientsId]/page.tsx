"use client";
import { Fragment } from "react";
import { NextPage } from "next";
import { usePathname, useRouter } from "next/navigation";

interface ClientsProjectProps {}

const ClientsProject: NextPage<ClientsProjectProps> = (props) => {
  const router = useRouter();
  const path = usePathname();
  console.log(router, 111, path);
  return (
    <Fragment>
      <h1>ClientsProject</h1>
    </Fragment>
  );
};
export default ClientsProject;
