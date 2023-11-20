"use client";
import React, { Fragment } from "react";
import { NextPage } from "next";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import CardWrapper from "@/components/event/CardWrapper";

interface EventsListProps {}

const eventData = [
  { id: 1, name: "Vue", content: "vue 123" },
  { id: 2, name: "React", content: "vue 123" },
  { id: 3, name: "Angel", content: "vue 123" },
  { id: 4, name: "Next", content: "vue 123" },
  { id: 5, name: "Neut", content: "vue 123" },
  { id: 6, name: "Vite", content: "vue 123" },
  { id: 7, name: "Bootstrap", content: "vue 123" },
  { id: 8, name: "Three", content: "vue 123" },
  { id: 9, name: "Gl", content: "vue 123" },
  { id: 10, name: "None", content: "vue 123" },
];
const EventsList: NextPage<EventsListProps> = (props) => {
  const router = useRouter();

  return (
    <Fragment>
      <h1>eventslist</h1>
      <div className={"flex gap-16 flex-wrap"}>
        {eventData.map((item) => {
          return (
            <CardWrapper
              key={item.id}
              name={item.name}
              content={item.content}
            />
          );
        })}
      </div>
    </Fragment>
  );
};
export default EventsList;
