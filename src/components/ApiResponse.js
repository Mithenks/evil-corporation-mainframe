import * as React from "react";

const ApiResponse = ({ apiResponse }) => {
  if (apiResponse) {
    switch (apiResponse.status) {
      case 200:
        return (
          <>
            <p>{apiResponse.data}</p>
          </>
        );
      case 403:
      case 401:
        return (
          <>
            <p>Unauthorized ({apiResponse.status})</p>
          </>
        );
      default:
        return (
          <>
            <p>An error occurred</p>
          </>
        );
    }
  } else {
    return <p>Loading data...</p>;
  }
};

export default ApiResponse;
