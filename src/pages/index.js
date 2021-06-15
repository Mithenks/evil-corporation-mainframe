import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { AuthService, useAuth } from "gatsby-theme-auth0";
import UserProfile from "../components/UserProfile";
import ApiResponse from "../components/ApiResponse";

const IndexPage = () => {
  const { isLoggedIn, profile } = useAuth();

  const [publicData, setPublicData] = useState();
  const [privateData, setPrivateData] = useState();
  const [paymentData, setPaymentData] = useState();

  useEffect(() => {
    if (isLoggedIn && profile) {
      console.log(AuthService);
      console.log("Access token: ", AuthService.getAccessToken());

      const instance = axios.create({
        baseURL: "https://evil-corp-api.herokuapp.com/",
        headers: {
          Authorization: "Bearer " + AuthService.getAccessToken(),
        },
        validateStatus: function (status) {
          return status >= 200 && status < 500;
        },
      });

      instance
        .get("/public")
        .then((res) => setPublicData(res))
        .catch(console.log);

      instance
        .get("/private")
        .then((res) => {
          setPrivateData(res);
        })
        .catch(console.log);

      instance
        .get("/payments")
        .then((res) => setPaymentData(res))
        .catch(console.log);
    }
  }, [isLoggedIn, profile]);

  if (isLoggedIn && profile) {
    return (
      <main>
        <title>Evil Corporation Mainframe</title>
        <h1>Welcome to Evil Corporation Mainframe</h1>
        <UserProfile profile={profile} />
        <button onClick={AuthService.logout}>Logout</button>

        <h1>Public information</h1>
        <ApiResponse apiResponse={publicData} />

        <h1>Private data</h1>
        <ApiResponse apiResponse={privateData} />

        <h1>Payment data</h1>
        <ApiResponse apiResponse={paymentData} />
      </main>
    );
  } else {
    return (
      <main>
        <title>Evil Corporation Mainframe</title>

        <button onClick={AuthService.login}>Login</button>
      </main>
    );
  }
};

export default IndexPage;
