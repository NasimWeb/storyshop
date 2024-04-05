import { useState } from "react";
import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import DateLong from "./Context/DataDefualtLongContext";
import ToggleSidebarState from "./Context/ToggleSidebarState";
import searchDataValue from "./Context/SearchData";
import AdminUser from "./Context/Athorization";
import Login from "./Pages/Login/Login";

function App() {
  const router = useRoutes(routes);
  const [defaultRecordLong, setDefaultRecordLong] = useState("Day");
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [searchData, setSearchData] = useState(null);
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  


  return (
    <>
    
    <AdminUser.Provider
      value={{setIsUserLoggedIn}}
    >
      <DateLong.Provider value={{ defaultRecordLong, setDefaultRecordLong }}>
        <ToggleSidebarState.Provider
          value={{ toggleSidebar, setToggleSidebar }}
        >
          <searchDataValue.Provider value={{ searchData, setSearchData }}>
            {isUserLoggedIn  ? (
              <div className="flex w-full flex-wrap">
                <Sidebar
                  isShowSidebar={isShowSidebar}
                  setIsShowSidebar={setIsShowSidebar}
                />
                <div className="flex-[7_2_0%] flex flex-col bg-zinc-900 flex-wrap">
                  <Topbar
                    isShowSidebar={isShowSidebar}
                    setIsShowSidebar={setIsShowSidebar}
                  />
                  {router}
                </div>
              </div>
            ) : (
              <Login />
            )
          }
          </searchDataValue.Provider>
        </ToggleSidebarState.Provider>
      </DateLong.Provider>
    </AdminUser.Provider>
    </>
  );
}

export default App;
