"use client";
import { Fragment } from "react";
import { NextPage } from "next";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface ClientsItemProps {}

const ClientsItem: NextPage<ClientsItemProps> = (props) => {
  const router = useRouter();
  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push("/clients/max/123");
  };

  return (
    <Fragment>
      <h1 className={"text-blue-600"}>ClientsItem</h1>
      <Button color="success" onClick={onButtonClick}>
        Load project
      </Button>
    </Fragment>
  );
};
export default ClientsItem;
