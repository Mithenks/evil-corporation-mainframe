import React from "react";

const UserProfile = ({ profile }) => {
  return (
    <>
      <h3>Profile data</h3>
      <div>
        <p>Id: {profile.sub}</p>
        <p>E-mail: {profile.email}</p>
        <p>Name: {profile.name}</p>
      </div>
    </>
  );
};

export default UserProfile;
