import React, { useEffect } from "react";
import "./Comments.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFromServer } from "../../Redux/Store/Users";

export default function Comments() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(
      getUsersFromServer("https://fake-json-api.mock.beeceptor.com/users")
    );
  }, []);

  return (
    <div className="comments flex-1  w-full  bg-zinc-900 p-5 rounded-lg" style={{height : '508px'}}>
      <div className="">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-white text-2xl font-bold">Comments</h1>
          <div className="images-user flex">
            {data ? (
              data.slice(6, 9).map((user) => {
                return (
                  <img
                    key={user.id}
                    className="rounded-full w-12 h-12 max-w-full"
                    src={user.photo}
                    alt=""
                  />
                );
              })
            ) : (
              <p className="text-white">
                if you cant't see comments beacuse of you must turn on your vpn
                to see them
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col  gap-3 ">
          {data.length ? (
            data.slice(0, 5).map((user) => {
              return (
                <>
                  <div
                    key={user.id}
                    className="flex items-center justify-between "
                  >
                    <img
                      src={user.photo}
                      alt="user"
                      className="rounded-full w-12 h-12 max-w-full"
                    />
                    <div className="text-white text-sm">
                      <b>{user.name}</b>
                    </div>
                    <div className="text-gray-500">@{user.username}</div>
                    <div className="text-white">1h</div>
                  </div>
                  <div style={{ marginTop: "-26px" }}>
                    <span className="text-gray-500 ml-16 mr-1">on</span>
                    <b className="text-white text-sm">{user.company}</b>
                    <div className="text-white ml-16 text-xs">
                      Very high-quality product and arrived quickly.
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <p className="text-white">
              if you can't see comments because of you must turn on your VPN to
              see them
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
