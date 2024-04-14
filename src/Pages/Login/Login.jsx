import React, { useState  , useContext, useEffect} from "react";
import "./Login.css";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form"
import AdminUser from "../../Context/Athorization";
import setCookie from "../../Hooks/SetCookie";
import getCookieValue from "../../Hooks/GetCookieValue";


export default function Login() {

  const { register, handleSubmit , formState:{errors}} = useForm({
   defaultValues : {
    username : '',
    password : ''
   }

  })

	  
 
const { setIsUserLoggedIn} = useContext(AdminUser)

useEffect(()=>{
  const usernameCookie = getCookieValue('usernameAdmin')
  const passwordCookie = getCookieValue('passwordAdmin')
  if(usernameCookie & passwordCookie) {
    setIsUserLoggedIn(true)
  }
},[])




  const signIn = (data) => {

    if (data.username === "nasim-rbi" && data.password === "12345678") {
		setIsUserLoggedIn(true)
    setCookie('usernameAdmin', 'nasim-rbi' , 1)
    setCookie('passwordAdmin', '12345678' , 1)
		Swal.fire({
			position: "center",
			icon: "success",
			title: "logged in successfully",
			showConfirmButton: false,
			timer: 1500,
		  });
    } else {
      Swal.fire({
		position: "center",
		icon: "error",
		title: "you are't admin ",
		showConfirmButton: false,
		timer: 1500,
      });
    }
  };





  return (
    <div
      
      style={{ background: " rgba(17, 24, 39, 1)", height: "100vh" , width : '100vw' }}
    >
      <div
        className="flex justify-center "
        style={{ alignItems: "center", height: "100%" }}
      >
        <div className="form-container">
          <p className="title">Login</p>
          <form className="form" onSubmit={handleSubmit(signIn)}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
			          
			          {...register('username', {
                  required : {
                    value : true,
                    message : 'this feild is required'
                  },
                  minLength : {
                    value : 5,
                    message : 'must be at least 8 character'
                  },
                  maxLength : {
                    value : 20,
                    message : 'maximom length is 20 character'
                  }
                })}
                type="text"
                id="username"
                placeholder=""
              />
              <p className="text-red-600">{errors.username && errors.username.message}</p>
            </div>
            <div className="input-group mb-5">
              <label htmlFor="password">Password</label>
              <input
			          {...register('password',{
                  required : {
                    value : true,
                    message : 'this feild is required'
                  },
                  minLength : {
                    value : 8,
                    message : 'must be at least 8 character'
                  },
                  maxLength : {
                    value : 20,
                    message : 'maximom length is 20 character'
                  }
                })}
                type="password"
                id="password"
                placeholder=""
              />
             <p className="text-red-600">{errors.password && errors.password.message }</p>
            </div>
            <button className="sign">
              Login
            </button>
          </form>
          <div className="social-message">
            <div className="line"></div>
            <p className="message">Login to StoryShop 🙂 </p>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
