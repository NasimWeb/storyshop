import { useEffect, useState } from "react";
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
import darkModeStatus from "./Context/DarkmodeContext";
import getCookieValue from "./Hooks/GetCookieValue";


function App() {

  const usernameCookie = getCookieValue('usernameAdmin')
  const passwordCookie = getCookieValue('passwordAdmin')


  const router = useRoutes(routes);
  const [defaultRecordLong, setDefaultRecordLong] = useState("Day");
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [searchData, setSearchData] = useState(null);
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(usernameCookie === 'nasim-rbi'  & passwordCookie === '12345678' ? true : false);
  const [theme , setTheme] = useState('dark')
  
  useEffect(()=>{
    localStorage.setItem('theme',theme)
  },[theme])

  
  useEffect(()=>{
    if(usernameCookie & passwordCookie) {
      setIsUserLoggedIn(true)
    }
  },[])




  return (
    <>
    
    <darkModeStatus.Provider value={{theme, setTheme}}>
    <AdminUser.Provider value={{setIsUserLoggedIn}}>
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
                <div className="flex-[7_2_0%] flex flex-col dark:bg-zinc-900 bg-white flex-wrap">
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
    </darkModeStatus.Provider>
    </>
  );
}

export default App;
