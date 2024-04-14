import React, { useContext, useEffect, useState } from "react";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "./Topbar.css";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import DateLong from "../../Context/DataDefualtLongContext";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ToggleSidebarState from "../../Context/ToggleSidebarState";
import Breadcrumb from "../BreadCrumb/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../../Redux/Store/Products";
import { useLocation } from "react-router-dom";
import { updateCart } from "../../Redux/Store/Carts";
import Swal from "sweetalert2";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import searchDataValue from "../../Context/SearchData";
import darkModeStatus from "../../Context/DarkmodeContext";



export default function Topbar({isShowSidebar , setIsShowSidebar}) {
  const datelong = useContext(DateLong);
  const {toggleSidebar , setToggleSidebar} = useContext(ToggleSidebarState);
  const location = useLocation();
  const [isShowListSearch, setIsShowListSearch] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const {searchData, setSearchData} = useContext(searchDataValue);
  const [fontCountSize , setFountCountSize] = useState(14);
  const [ isShowModalSetting,setIsShowModalSetting] = useState(false)
  const {theme , setTheme} = useContext(darkModeStatus)

  

  const [selectedRange, setSelectedRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);


  const handleDarkMode = () => {
    setTheme('dark')
    document.body.classList.add('dark')
    localStorage.setItem('theme',theme)
  }

  const handleLightMode = () => {
    setTheme('light')
    document.body.classList.remove('dark')
    localStorage.setItem('theme',theme)
  }

  const handleSystemMode = () => {
    if ( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.body.classList.add('dark')
    } else {
      setTheme('light')
      document.body.classList.add('light')
    }
  }
  




  const [isShowDatePicker, setIsShowDatePicker] = useState(false);
  const [activeItem, setActiveItem] = useState("Day");
  const dispatch = useDispatch();

  const handleActiveItems = (item) => {
    setActiveItem(item);
  };

  const EditHandler = () => {
    if (location.pathname.startsWith("/product/")) {
      dispatch(
        editProduct(
          `https://fakestoreapi.com/products/${localStorage.getItem("Id_data")}`
        )
      );
    } else if (location.pathname.startsWith("/user/")) {
      Swal.fire({
        position: "top-end",
        title: "updated sucessfully",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (location.pathname.startsWith("/category/")) {
    } else if (location.pathname.startsWith("/cart/")) {
      dispatch(
        updateCart(
          `https://fakestoreapi.com/carts/${sessionStorage.getItem("user_Id")}`
        )
      );
    }
  };


  

  const allProducts = useSelector((state) => state.products);
  const allCarts = useSelector((state) => state.carts);
  const allUsers = useSelector((state) => state.users);

  const findDatas = (value) => {
    if (location.pathname.startsWith("/products")) {
      const mainProductSearch = allProducts.data.filter((product) =>
        product.title
          .charAt(0)
          .toUpperCase()
          .includes(value.charAt(0).toUpperCase())
      );
      setSearchData(mainProductSearch);
    } else if (location.pathname.startsWith("/cart")) {
      const mainCartSearch = allCarts.data.filter((product) =>
        product.date.slice(0, 10).startsWith(value)
      );
      setSearchData(mainCartSearch);
    } else if (location.pathname.startsWith("/users")) {
      const mainUserSearch = allUsers.data.filter(
        (product) =>
          product.name
            .charAt(0)
            .toUpperCase()
            .startsWith(value.charAt(0).toUpperCase()) ||
          product.username
            .charAt(0)
            .toUpperCase()
            .startsWith(value.charAt(0).toUpperCase())
      );
      setSearchData(mainUserSearch);
    }
  };

  useEffect(() => {
    setSearchData(null);
    setIsShowSidebar(false)
  }, [location.pathname]);

  const targetData = (id) => {
    if (location.pathname.startsWith("/products")) {
      const mainData = allProducts.data.filter((product) => product.id === id);
      setSearchData(mainData);
      console.log(mainData);
    } else if (location.pathname.startsWith("/cart")) {
      const mainData = allCarts.data.filter((product) => product.id === id);
      setSearchData(mainData);
      console.log(mainData);
    } else if (location.pathname.startsWith("/users")) {
      const mainData = allUsers.data.filter((product) => product.id === id);
      setSearchData(mainData);
      console.log(mainData);
    }
    setIsShowListSearch(false);
  };

  const handleItemClick = (productId) => {
    targetData(productId);
  };

  return (
    <>
    <style>
      {
        `
        body {
        font-size: ${fontCountSize}px !important;
        }
        body.light {
            background-color : #fff !important
        }
        `
      }
    </style>
    <div className={`topbar bg-white text-dark sticky top-0 z-10 dark:bg-zinc-900/75 backdrop-blur-md p-3 `}>
      <div className="flex justify-between">
        <div className="sale-dashourd">
          <p className=" text-zinc-500 text-[12px]">Pages / Dashboard</p>
          <p className=" font-bold p-1">Sales</p>
        </div>

        <div className="notifs flex gap-5 relative ">
          <div className="relative text-sm text-zinc-500 p-1.5 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-500 dark:hover:text-blue-500 active:text-blue-500">
            <SmsOutlinedIcon />
            <span className="absolute end-0 top-0 flex h-3 w-3 ">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
            </span>
          </div>
          <div className="relative text-sm text-zinc-500 p-1.5 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-500 dark:hover:text-blue-500 active:text-blue-500">
            <NotificationsOutlinedIcon />
            <span className="absolute end-0 top-0 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
            </span>
          </div>
          <div onClick={() => setIsShowModalSetting(true)} onMouseLeave={() => setIsShowModalSetting(false)} className="relative text-sm text-zinc-500 p-1.5 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-500 dark:hover:text-blue-500 active:text-blue-500">
            <SettingsOutlinedIcon   />
            <div className={`absolute bg-black p-5 mb-2  ${isShowModalSetting ? 'block' : 'hidden'}`} style={{right : '25px' , top : '29px' , width : '150px' , height : 'auto' , zIndex : '9999'}}>
               <p className="ml-3">Font Size:</p>
               <div className="flex items-center justify-evenly mb-4">
                <button className="text-zinc-500" style={{fontSize : '15px', cursor : 'pointer'}} onClick={() => {
                  setFountCountSize(prevState => prevState - 1)
                }}><i class="fa-solid fa-minus"></i></button>
                <span className="text-zinc-500">{fontCountSize}</span>
                <button className="text-zinc-500" style={{fontSize : '15px', cursor : 'pointer'}} onClick={() => setFountCountSize(prevstate => prevstate + 1)}><i class="fa-solid fa-plus"></i></button>
               </div>
               <p className="ml-3 mb-2">Dark mode:</p>
               <div className="flex gap-4 ml-3"> 
               <i class="fa-solid fa-moon text-zinc-500" onClick={() => handleDarkMode()}></i>
               <i class="fa-solid fa-sun text-zinc-500" onClick={() => handleLightMode()}></i>
               <i class="fa-solid fa-laptop text-zinc-500"  onClick={() => handleSystemMode()}></i>
               </div>
            </div>
            <span className="absolute end-0 top-0 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-end" onClick={() => setIsShowSidebar(!isShowSidebar)}>
          <div class={`hamburger xl:hidden `} >
            <input class="checkbox" type="checkbox"   />
            <svg fill="none" viewBox="0 0 50 50" height="50" width="50" >
              <path
                class="lineTop line"
                stroke-linecap="round"
                stroke-width="4"
                stroke="black"
                d="M6 11L44 11"
                
              ></path>
              <path
                stroke-linecap="round"
                stroke-width="4"
                stroke="black"
                d="M6 24H43"
                class="lineMid line"
              ></path>
              <path
                stroke-linecap="round"
                stroke-width="4"
                stroke="black"
                d="M6 37H43"
                class="lineBottom line"
              ></path>
            </svg>
          </div>
          </div>

      {location.pathname === "/*/*" ? (
        <div className="searcharea dark:bg-zinc-900 bg-white text-white py-3 px-2">
          <div className="flex gap-2 xl:justify-between flex-wrap items-center">
            <div className="relative flex items-center">
              <div className="absolute left-0 mr-5 top-2 px-2 flex items-center">
                <SearchOutlinedIcon
                  style={{ fontSize: "15px" }}
                  className="text-xs text-white"
                />
              </div>
            </div>
            <Button variant="contained" className="rounded-full">
              <AddOutlinedIcon  style={{ fontSize: "20px" , fill:'#fff' }} />
              Save
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}

      {location.pathname === "/" ? (
        <div className="date sticky top-[var(--header-height)] z-[9] flex flex-wrap justify-between gap-4 border-b border-zinc-300/25   py-4 backdrop-blur-md bg-white dark:border-zinc-800/50 dark:bg-zinc-900/75 dark:text-white">
          <div
            data-component-name="Subheader/SubheaderLeft"
            className="flex flex-wrap items-center gap-4 md:me-auto"
          >
            <div className="flex rounded-full border-2 border-zinc-500/20 p-1 drop-shadow-xl dark:border-zinc-800">
              <button
                onClick={() => {
                  datelong.setDefaultRecordLong("Day");
                  handleActiveItems("Day");
                }}
                data-component-name="Button"
                type="button"
                className={`inline-flex items-center justify-center border-2  text-white hover:bg-blue-600 hover:border-blue-600   ${
                  activeItem === "Day"
                    ? "border-blue-600 bg-blue-600 "
                    : "border-transparent text-zinc-600 hover:text-white hover:border-blue-600"
                }  px-4 py-1 text-sm rounded-full transition-all duration-300 ease-in-out`}
              >
                Day
              </button>
              <button
                onClick={() => {
                  datelong.setDefaultRecordLong("Week");
                  handleActiveItems("Week");
                }}
                data-component-name="Button"
                type="button"
                className={`${
                  activeItem === "Week"
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-transparent bg-transparent text-zinc-600 hover:text-white hover:border-blue-600"
                } inline-flex items-center hover:bg-blue-600 hover:text-white hover:border-blue-600 justify-center    border-2     px-4 py-1 text-sm rounded-full transition-all duration-300 ease-in-out`}
              >
                Week
              </button>
              <button
                onClick={() => {
                  datelong.setDefaultRecordLong("Month");
                  handleActiveItems("Month");
                }}
                data-component-name="Button"
                type="button"
                className={`${
                  activeItem === "Month"
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "bg-transparent text-zinc-600 border-transparent hover:text-white hover:bg-blue-600 hover:border-blue-600 "
                } inline-flex items-center justify-center hover:text-white hover:bg-blue-600 hover:border-blue-600   border-2     px-4 py-1 text-sm rounded-full transition-all duration-300 ease-in-out`}
              >
                Month
              </button>
            </div>
          </div>
          <div
            className="calender hidden  lg:flex text-zinc-500 gap-2 hover:text-blue-500 cursor-pointer"
            onClick={() => setIsShowDatePicker(!isShowDatePicker)}
          >
            <CalendarMonthOutlinedIcon />
            <p>
              {selectedRange.map((date) => {
                const todayDate = date.startDate.toString();
                const slicedDate = todayDate.slice(0, 15);
                return slicedDate;
              })}
            </p>
            <ExpandMoreOutlinedIcon />
          </div>
          <div
            className={`p-6 date-picker  bg-zinc-800 border border-zinc-950/75 border-1 ${
              isShowDatePicker ? "" : "hidden"
            }`}
          >
            <DateRangePicker
              ranges={selectedRange}
              onChange={(ranges) => setSelectedRange([ranges.selection])}
            />
          </div>
        </div>
      ) : (
        <>
          {location.pathname.match(/^\/\w+\/\d+$/) ? (
            <div className="searcharea dark:bg-zinc-900 bg-white py-3 px-2">
              <div className="flex gap-2 justify-between items-center">
                <div className="relative flex items-center">
                  <Breadcrumb
                    current={location.pathname.slice(1, 8).replace("/", "")}
                  />
                </div>
                <Button
                  variant="contained"
                  className="rounded-full"
                  onClick={() => EditHandler()}
                >
                  <AddOutlinedIcon style={{ fontSize: "20px" }} />
                  Save
                </Button>
              </div>
            </div>
          ) : (
            <div className="searcharea dark:bg-zinc-900 bg-white py-3 px-2">
              <div className="flex gap-2 xl:justify-between flex-wrap items-center">
                <div className="relative flex items-center">
                  <div className="absolute left-0 mr-5 top-2 px-2 flex items-center">
                    <SearchOutlinedIcon
                      style={{ fontSize: "15px" }}
                      className="text-xs text-zinc-900"
                    />
                  </div>
                  <input
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                      findDatas(e.target.value);
                      setIsShowListSearch(true);
                    }}
                    onBlur={() => {
                      setSearchValue("");
                    }}
                    style={{ paddingLeft: "39PX" }}
                    type="text"
                    value={searchValue}
                    placeholder="search..."
                    className="search-input w-80 dark:bg-zinc-800 bg-white relative p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 focus:bg-transparent border-zinc-800 border-2 rounded-lg"
                  />
                  {isShowListSearch && (
                    <div className="absolute right-0 cursor-pointer">
                      <CloseIcon
                        className="text-xs text-zinc-900"
                        onClick={() => setIsShowListSearch(false)}
                      />
                    </div>
                  )}

                  <ul
                    className={` ${
                      isShowListSearch ? "absolute" : "hidden"
                    } left-0 top-10 bg-zinc-900 p-5  rounded-lg overflow-auto h-72  text-white`}
                  >
                    {isShowListSearch &&
                      (searchData.length !== 0 ? (
                        searchData.map((product) => {
                          return (
                            <li onClick={() => handleItemClick(product.id)}>
                              <List
                                sx={{
                                  width: "100%",
                                  maxWidth: 360,
                                  bgcolor: "background",
                                }}
                                className="cursor-pointer"
                              >
                                <div>
                                  <ListItem
                                    alignItems="flex-start"
                                    className="text-white"
                                    component={"button"}
                                    onClick={handleItemClick}
                                  >
                                    <ListItemAvatar>
                                      <Avatar
                                        alt="Remy Sharp"
                                        src={
                                          product.image
                                            ? product.image
                                            : product.photo
                                        }
                                      />
                                    </ListItemAvatar>
                                    <ListItemText
                                      // primary={'dhdj'}
                                      secondary={
                                        <React.Fragment>
                                          <Typography
                                            sx={{ display: "inline" }}
                                            component="span"
                                            variant="body2"
                                            color="white"
                                            className="px-10"
                                          >
                                            {product.title
                                              ? product.title.slice(0, 10)
                                              : product.date
                                              ? product.date.slice(0, 10)
                                              : product.name
                                              ? product.name
                                              : ""}
                                          </Typography>
                                          <p className="mt-1 text-white">
                                            {" "}
                                            {product.category}
                                          </p>
                                        </React.Fragment>
                                      }
                                    />
                                  </ListItem>
                                </div>
                                <Divider variant="inset" component="li" />
                              </List>
                            </li>
                          );
                        })
                      ) : (
                        <div className=" w-72  rounded-lg overflow-auto   text-white">
                          No Result
                        </div>
                      ))}
                  </ul>
                </div>
                <Button variant="contained" className="rounded-full">
                  <AddOutlinedIcon style={{ fontSize: "20px" }} /> new{" "}
                  {location.pathname.slice(1)}
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
    </>
  );
}
