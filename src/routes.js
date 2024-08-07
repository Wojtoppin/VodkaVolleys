/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import Players from "views/Players";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/",
    name: "Statystyki Drużyny",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/VodkaVolleys",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "tim-icons icon-atom",
  //   component: <Icons />,
  //   layout: "/VodkaVolleys",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: <Notifications />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: <UserProfile />,
  //   layout: "/admin",
  // },
  {
    path: "/main_table",
    name: "tabela strzelców",
    icon: "tim-icons icon-puzzle-10",
    component: <TableList />,
    layout: "/VodkaVolleys",
  },
  {
    path: "/players",
    name: "zawodnicy",
    icon: "tim-icons icon-single-02",
    component: <Players />,
    layout: "/VodkaVolleys",
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: <Typography />,
  //   layout: "/admin",
  // },
];
export default routes;
