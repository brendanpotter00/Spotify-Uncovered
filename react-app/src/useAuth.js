import axios from "axios";
import React, { useState, useEffect } from "react";

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  //hook to set the tokens and expires in and login
  useEffect(() => {
    axios
      .post("http://localhost:3001/login", {
        code,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({}, null, "/");
      })
      .catch((err) => {
        console.log("ERROR in useauth for login");
        console.log(err);
        window.location = "/";
      });
  }, [code]);

  //hook to handle the refresh token
  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    axios
      .post("http://localhost:3001/refresh", {
        refreshToken,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setExpiresIn(res.data.expiresIn);
      })
      .catch((err) => {
        console.log("ERROR in useauth hook for refresh");
        console.log(err);
        //window.location = "/";
      });
  }, [refreshToken, expiresIn]);

  return accessToken;
}
