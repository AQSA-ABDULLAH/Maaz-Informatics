import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import styles from "./Routes.module.css";
import Header from "../components/molecules/Header";
import Login from "../pages/Login/Login";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import WebsiteContent from "../pages/Websitecontent/main/WebsiteContent";
import ErrorPage from "../pages/404/ErrorPage";
import ManageContactUs from "../pages/ContactUs/ManageContactUs";
import ManageUsers from "../pages/Users/ManageUsers";

const RoutesStack = ({ openSidebar, setOpenSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const headerButtons = {
    '/classes': {
      buttonText: 'Add Class',
      onClick: () => {
        navigate('/add-class')
      },
    },
    '/packages': {
      buttonText: 'Add Package',
      onClick: () => {
        navigate('/add-package')
      },
    },
  };
  const currentPath = location.pathname;

  return (
    <>
      <div className={styles.mainDashboard}>
        <Header
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          haveButton={!!headerButtons[currentPath]}
          ButtonText={headerButtons[currentPath]?.buttonText}
          onClick={headerButtons[currentPath]?.onClick} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/website-content" element={<WebsiteContent />} />
          <Route path="/contact-us" element={<ManageContactUs />} />
          <Route path="/manageUsers" element={<ManageUsers />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
};

export default RoutesStack;