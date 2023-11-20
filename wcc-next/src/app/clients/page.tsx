import { Fragment } from "react";
import { NextPage } from "next";
import Link from "next/link";

interface ClientsListProps {}

const ClientsList: NextPage<ClientsListProps> = (props) => {
  const clients = [
    { id: 1, name: "Next" },
    { id: 2, name: "Nuxt" },
    { id: 3, name: "React" },
    { id: 4, name: "Vue" },
    { id: 5, name: "Angel" },
  ];
  return (
    <Fragment>
      <h1>ClientsListProps</h1>
      <ul>
        <li>
          <Link href={"/clients/max"}>Majos</Link>
        </li>
        <li>
          <Link href={"/clients/min"}>Mmin</Link>
        </li>
        {clients.map((client, index) => {
          return (
            <li key={index}>
              <Link href={`clients/${client.id}`}>{client.name}</Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
export default ClientsList;
