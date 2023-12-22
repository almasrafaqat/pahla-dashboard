import { FaTasks } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { GrTask } from "react-icons/gr";
import { PiShoppingCartLight } from "react-icons/pi";
import { RiStackLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { BiMessageSquareEdit } from "react-icons/bi";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { GiComputerFan } from "react-icons/gi";
import { SiCompilerexplorer } from "react-icons/si";






export const SidebarItems = [
  {
    id: 1,
    label: "ui dashboard",
    title: "dashboard",
    url: "/",
    icon: <MdDashboard />,
  },
  {
    id: 2,
    label: "ui product",
    title: "Product",
    url: "/products",
    icon: <PiShoppingCartLight />,
    subitems: [
      {
        id: 1,
        title: "product details",
        icon: <FaTasks />,
        url: ""
      },
      {
        id: 2,
        title: "product orders",
        icon: <MdAddTask />,
        url: ""

      },
      {
        id: 3,
        title: "product data",
        icon: <GrTask />,
        url: ""

      },
    ]
  },
  {
    id: 3,
    label: "ui forms",
    title: "forms",
    url: "/forms",
    icon: <BiMessageSquareEdit />,
    subitems: [
      {
        id: 1,
        title: "form components",
        icon: <FaTasks />,
        url: ""
      },
      {
        id: 2,
        title: "form orders",
        icon: <MdAddTask />,
        url: ""

      },
      {
        id: 3,
        title: "form products",
        icon: <GrTask />,
        url: ""

      },
    ]
  },
 
  {
    id: 4,
    label: "ui tasks",
    title: "task",
    icon: <MdAddTask />,
    url: "/tasks",
    subitems: [
      {
        id: 1,
        title: "task lists",
        icon: <FaTasks />,
        url: "/dashboard/task/list"
      },
      {
        id: 2,
        title: "Add new Task",
        icon: <MdAddTask />,
        url: "/dashboard/task/add"

      },
      {
        id: 3,
        title: "Update oldTask",
        icon: <GrTask />,
        url: "/dashboard/task/update"

      },
    ]

  },
  {
    id: 5,
    label: "ui categories",
    title: "category",
    url: "",
    icon: <RiStackLine />,
  },
  {
    id: 6,
    label: "ui elements",
    title: "Electron",
    icon: <FaCompressArrowsAlt />,
    url: "",
    subitems: [
      {
        id: 1,
        title: "elements 1",
        icon: <FaTasks />,
        url: "/dashboard/task/list"
      },
      {
        id: 2,
        title: "elements 2",
        icon: <MdAddTask />,
        url: "/dashboard/task/add"

      },
      {
        id: 3,
        title: "elements 3",
        icon: <GrTask />,
        url: "/dashboard/task/update"

      },
    ]

  },
  {
    id: 7,
    label: "ui elements",
    title: "Electron",
    icon: <GiComputerFan />,
    url: "",
    subitems: [
      {
        id: 1,
        title: "elements 1",
        icon: <FaTasks />,
        url: "/dashboard/task/list"
      },
      {
        id: 2,
        title: "elements 2",
        icon: <MdAddTask />,
        url: "/dashboard/task/add"

      },
      {
        id: 3,
        title: "elements 3",
        icon: <GrTask />,
        url: "/dashboard/task/update"

      },
    ]

  },
  {
    id: 8,
    label: "ui elements",
    title: "element",
    icon: <SiCompilerexplorer />,
    url: "",
    subitems: [
      {
        id: 1,
        title: "elements 1",
        icon: <FaTasks />,
        url: "/dashboard/task/list"
      },
      {
        id: 2,
        title: "elements 2",
        icon: <MdAddTask />,
        url: "/dashboard/task/add"

      },
      {
        id: 3,
        title: "elements 3",
        icon: <GrTask />,
        url: "/dashboard/task/update"

      },
    ]

  },


]