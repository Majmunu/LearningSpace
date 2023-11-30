import { Navigate } from "react-router-dom";
import React from "react";
import TestPage from "../pages/Test";
import ContractSelect from "../pages/ContractSelect";

const { lazy } = React;
const TodoPage = lazy(() => import("../TypeScript/Todo"));
const Interaction = lazy(() => import("../pages/Interaction/index"));
const Condition = lazy(() => import("../pages/Condition/index"));
const ContractModal = lazy(() => import("../pages/ContractModal/index"));
const Event = lazy(() => import("../pages/Event/page"));
const FormDemo = lazy(() => import("../pages/FormDemo"));
// 路由表统一管理理由
export default [
  // {
  //   path: "/counter", //路径
  //   element: <Counter />, //组件
  //   // //子路由
  //   // children:[
  //   //     {
  //   //         path:'analyse',
  //   //         element:<Analyse/>
  //   //     },
  //   //     {
  //   //         path:'manage',
  //   //         element:<Manage/>
  //   //     },
  //   //     {
  //   //         path:'sign',
  //   //         element:<Sign/>
  //   //     }
  //   // ]
  // },
  // {
  //   path: "/todo",
  //   element: <TodoPage />,
  // },

  {
    path: "/",
    //实现路由重定向
    element: <Navigate to="/" />,
  },
  // {
  //   path: "/tsc",
  //
  //   element: <Tsc />,
  // },
  // {
  //   path: "/tc",
  //   element: <TSCounter />,
  // },
  // {
  //   path: "/sankey",
  //   element: <Sankey />,
  // },
  // {
  //   path: "/wang",
  //   element: <MyE />,
  // },
  // {
  //   path: "/tree",
  //   element: <SNTree />,
  // },
  {
    path: "/interaction",
    element: <Interaction />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/c",
    element: <Condition />,
  },
  {
    path: "/t",
    element: <ContractModal />,
  },
  {
    path: "/e",
    element: <Event />,
  },
  {
    path: "/form",
    element: <FormDemo />,
  },
];
