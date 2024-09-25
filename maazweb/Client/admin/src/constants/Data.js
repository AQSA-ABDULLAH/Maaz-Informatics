// import { GiGymBag } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import {IoMdSettings} from 'react-icons/io'
import {CgWebsite} from 'react-icons/cg';
import { AiFillHome } from "react-icons/ai";

export const Main = [
  {
    icon: <AiFillHome size={20} />,
    text: "Home",
    route:'/'
  },
  {

    icon: <BsCreditCard2FrontFill size={20} />,
    text: "About",
    route:'/bookings'

  },
  {
    icon: <BiSolidContact size={20}/>,
    text: "Contact Us",
    route:'/contact-us'
  },
  {
    icon: <FaUsers size={20}/>,
    text: "Manage Users",
    route:'/manageUsers'
  },
];

export const GeneralSettting = [
  {
    icon: <CgWebsite size={20} />,
    text: "Website Content",
    route:'/website-content'
  },
  {
    icon: <IoMdSettings size={20}/>,
    text: "Profile Settings",
    route:'#'
  },
];