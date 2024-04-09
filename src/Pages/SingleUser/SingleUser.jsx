import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUsersFromServer } from '../../Redux/Store/Users'
import setCookie from '../../Hooks/SetCookie'
import getCookieValue from '../../Hooks/GetCookieValue'
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";


export default function SingleUser() {


const param = useParams()
const {data,loading,error} = useSelector(state => state.users)
const dispatch = useDispatch()


 const mainUser = data.find(user => user.id == param.userId)

 
 const [userId,setUserId] = useState(mainUser ? mainUser.id :  getCookieValue('user_id'))
 const [userName, setUserName] = useState(mainUser ? mainUser.name : getCookieValue('user_name'))
 const [userCompany , setUserCompany] = useState(mainUser ? mainUser.company : getCookieValue('user_Company'))
 const [username , setUsername] = useState(mainUser ? mainUser.username : getCookieValue('username_user'))
 const [userEmail , setUserEmail] = useState(mainUser ? mainUser.email : getCookieValue('user_Email'))
 const [userAddress , setUserAddress] = useState(mainUser ? mainUser.address : getCookieValue('user_adress'))
 const [userState , setUserState] = useState(mainUser ? mainUser.state : getCookieValue('user_State'))
 const [userCountry , setUserCountry] = useState(mainUser ? mainUser.country : getCookieValue('user_Country'))
 const [userPhone , setUserPhone] = useState(mainUser ? mainUser.phone : getCookieValue('user_Phone'))
 const [userPhoto , setUserPhoto] = useState(mainUser ? mainUser.photo : getCookieValue('user_Photo'))

 const handleImageFile = (e) => {
  const file = e.target.files[0];
  setUserPhoto(URL.createObjectURL(file));
};

console.log(getCookieValue('user_State'));

 useEffect(()=>{
  mainUser && (
    setUserId(mainUser.id),
    setUserName(mainUser.name),
    setUserCompany(mainUser.company),
    setUsername(mainUser.username),
    setUserEmail(mainUser.email),
    setUserAddress(mainUser.address),
    setUserState(mainUser.state),
    setUserCountry(mainUser.country),
    setUserPhone(mainUser.phone),
    setUserPhoto(mainUser.photo)
 )   
 },[mainUser])



 useEffect(() => {

     dispatch(getUsersFromServer('https://fake-json-api.mock.beeceptor.com/users'))
   

     mainUser && (
        setUserId(mainUser.id),
        setUserName(mainUser.name),
        setUserCompany(mainUser.company),
        setUsername(mainUser.username),
        setUserEmail(mainUser.email),
        setUserAddress(mainUser.address),
        setUserState(mainUser.state),
        setUserCountry(mainUser.country),
        setUserPhone(mainUser.phone),
        setUserPhoto(mainUser.photo)
     )

 },[])



 useEffect(() => {
  
  setCookie('user_id',userId)
  setCookie('user_name',userName)
  setCookie('user_Company',userCompany)
  setCookie('username_user',username)
  setCookie('user_Email',userEmail)
  setCookie('user_adress',userAddress)
  setCookie('user_State',userState)
  setCookie('user_Country',userCountry)
  setCookie('user_Phone',userPhone)
  setCookie('user_Photo',userPhoto)

 } , [userId,userName,userCompany,username,userEmail,userAddress,userState,userCountry,userPhone,userPhoto])



  return (
    <div  className="grid grid-cols-12 gap-2 dark:bg-black bg-zinc-100">
    <div
     
      className="p-4 col-span-12 lg:col-span-9 dark:bg-black bg-zinc-100"
    >
      <h1 className="font-bold text-3xl dark:text-white text-dark">user Edit</h1>

      <form
        className="dark:bg-zinc-900 bg-white my-8 flex flex-col flex-wrap rounded-xl p-2"
        action=""
      >
        <h1 className="text-white  font-bold text-xl mb-5">General Info</h1>

        <div className="grid grid-cols-12   gap-4">
          <div className="col-span-12 dark:text-white text-black  lg:col-span-6 ">
            <label
              htmlFor="ID"
              className="text-sm mb-2 inline-block w-full cursor-pointer"
            >
              ID
            </label>
            <input
              type="text"
              placeholder="Id"
              value={userId}
              disabled
              className="w-full disabled:border-zinc-600 disabled:opacity-50 disabled:shadow-none search-input bg-zinc-800  p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 focus:bg-transparent border-zinc-800 border-2 rounded-lg"
            />
          </div>
          <div className="col-span-12 dark:text-white text-black lg:col-span-6">
            <label
              htmlFor="Title"
              className="text-sm mb-2 inline-block w-full cursor-pointer dark:text-white text-black "
            >
              Name
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="name"
              className="w-full search-input dark:bg-zinc-800 bg-zinc-100 dark:text-white text-black  p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 focus:bg-transparent border-zinc-800 border-2 rounded-lg"
            />
          </div>
          
          <div className="col-span-12 dark:text-white text-black ">
            <label htmlFor="Rate" className='dark:text-white text-black' >Company</label>
            <input
              type="text"
              value={userCompany}
              onChange={(e) => setUserCompany(e.target.value)}
              placeholder="company"
              className="w-full search-input dark:bg-zinc-800 bg-zinc-100 dark:text-white text-black  p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 focus:bg-transparent border-zinc-800 border-2 rounded-lg"
            />
          </div>

          <div className="col-span-12 lg:col-span-6 dark:text-white text-black ">
            <label htmlFor="price" >Username</label>
            <input
              type="text"
              placeholder="price"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full search-input dark:bg-zinc-800 bg-zinc-100 dark:text-white text-black  p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 focus:bg-transparent border-zinc-800 border-2 rounded-lg"
            />
          </div>

          <div className="col-span-12 lg:col-span-6 dark:text-white text-black">
            <label htmlFor="Rate">Email</label>
            <input
              type="text"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Rate"
              className="w-full search-input dark:bg-zinc-800 bg-zinc-100  dark:text-white text-black p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 focus:bg-transparent border-zinc-800 border-2 rounded-lg"
            />
          </div>

          <div className="col-span-12 lg:col-span-6 dark:text-white text-black ">
            <label htmlFor="Rate">Address</label>
            <input
              type="text"
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
              placeholder="Rate"
              className="w-full search-input dark:bg-zinc-800 bg-zinc-100 dark:text-white text-black p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 focus:bg-transparent border-zinc-800 border-2 rounded-lg"
            />
          </div>

          <div className="col-span-12 lg:col-span-6 dark:text-white text-black ">
            <label htmlFor="Rate">State</label>
            <input
              type="text"
              value={userState}
              onChange={(e) => setUserState(e.target.value)}
              placeholder="Rate"
              className="w-full search-input dark:bg-zinc-800  bg-zinc-100 dark:text-white text-black p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 focus:bg-transparent border-zinc-800 border-2 rounded-lg"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 dark:text-white text-black ">
            <label htmlFor="Rate">Country</label>
            <input
              type="text"
              value={userCountry}
              onChange={(e) => setUserCountry(e.target.value)}
              placeholder="country"
              className="w-full search-input dark:bg-zinc-800 bg-zinc-100 dark:text-white text-black p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 focus:bg-transparent border-zinc-800 border-2 rounded-lg"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 dark:text-white text-black ">
            <label htmlFor="Rate dark:text-white text-black">Phone</label>
            <input
              type="text"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              placeholder="Rate"
              className="w-full search-input dark:bg-zinc-800 bg-zinc-100 text-black p-1 transition-all duration-300 ease-in-out hover:border-blue-500 visible::border-0 focus:border-zinc-800 active:border-zinc-800 focus:bg-transparent border-zinc-800 border-2 rounded-lg"
            />
          </div>
        </div>
      </form>



   

      <div className="dark:bg-zinc-900 bg-white text-black my-8 flex flex-col flex-wrap rounded-xl p-2">
        <h1 className="font-bold text-3xl dark:text-white text-black my-5">Image</h1>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-zinc-500/25 px-6 py-10 dark:border-zinc-500/50">
          <div className="mt-2 flex flex-col justify-center rounded-lg  px-6 py-10 dark:border-zinc-500/50">
            <PhotoSizeSelectActualOutlinedIcon
              style={{ fill: "rgba(59 130 246 / 1)" }}
              className="text-blue-500 mx-auto h-12 w-12"
            />
            <div>
              <label
                htmlFor="file-upload"
                className="cursor-pointer rounded-md font-semibold text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 focus-within:ring-offset-transparent hover:text-blue-600 transition-all duration-300 ease-in-out text-xs"
              >
                Upload a file
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={(e) => handleImageFile(e)}
                />
              </label>
              <span className="text-xs leading-5 text-gray-500 ml-2">
                or drag and drop
              </span>
            </div>
            <p className="text-xs leading-5 text-gray-500">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="col-span-12 sticky top-36 lg:col-span-3  dark:bg-zinc-900 bg-white mt-20 flex flex-col flex-wrap rounded-xl p-4 h-fit">
      <h1 className="dark:text-white text-black font-bold text-xl mb-5">Preview</h1>

      <img
        src={`${userPhoto}`}
        className="mx-100 h-auto w-full"
        alt="product image"
        srcset=""
      />
    </div>
  </div>
  )
}
