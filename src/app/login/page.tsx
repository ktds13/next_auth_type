"use client";

import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";

function Login() {
 
    return(
        <div>
               <Button
          color="primary"
          fullWidth={true}
          onClick={() => signIn("azure-ad", {callbackUrl: "/"})}>
          Login
        </Button>
    {/* <Button
   // onClick={() => signIn('azure-ad', {callbackUrl: "http://localhost:3000/api/auth/callback/azure-ad"})
    onClick={() => signIn("azure-ad", {callbackUrl: "/"})
    .then(response => {
        console.log("authentication successful: ", response);
      })
      .catch(error => {
        console.error("Authentication error: ", error)
      })
}
    >
        Login

    </Button> */}
    {/* <button onClick={() => signIn("azure-ad", {callbackUrl: "/"})}>Log In</button> */}
    </div>
    )
}
export default Login;