/*import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const GoogleLoginPage = () => {

  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse.credential);
        let profile = jwt_decode(credentialResponse.credential)
        .then()
        console.log(profile);
        console.log(profile.given_name)
      }}
      onError={() => {
        console.log('Error')
      }}
    />
  )
}

export default GoogleLoginPage; */
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
//import pg from "pg";



const GoogleLoginPage = () => {

  // const pool = new pg.Pool({
  //  user: 'postgres',
  //   host: "127.0.0.1",
  //   database: "FinalStretch",
  //   password: "postgres",
  //   port: 5000, // or your PostgreSQL port number
  // });

  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse.credential);
        let profile = jwt_decode(credentialResponse.credential)
        console.log(profile);
        console.log(profile.given_name)

        // Add the new user to the database
      //   const query = {
      //     text: "INSERT INTO google_users (displayName, firstName, lastName, image) VALUES ($1, $2, $3, $4, $5)",
      //     values: [profile.name, profile.given_name, profile.family_name, profile.picture],
          
      //   };
      //   pool.query(query)
      //     .then(res => console.log("New user added to database"))
      //     .catch(err => console.error(err));
      // }}
      // onError={() => {
      //   console.log('Error')
       }
    }
    />
  )
}

export default GoogleLoginPage;