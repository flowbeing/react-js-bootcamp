import { useParams } from "react-router-dom";

import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";

import { loginPageLoaderFunction, loginPageActionFunction } from "./LoginPage";
import { registrationPageLoaderFunction, registrationPageActionFunction } from "./RegistrationPage";

export default function LoginOrSignupPage() {

  const params = useParams();
  // Object.keys(params).map((item) => console.log(`${item}:${params[item]}`));
  const authMode = params.authMode;

  return(
    authMode === "login" ? <LoginPage/> : <RegistrationPage/>
  );
  

}

export function getLoginOrRegistrationLoaderFunction({request, params}){

  if (params.authMode === "login"){
    return loginPageLoaderFunction({request, params});
  }
  else{
    return registrationPageLoaderFunction({request, params});
  }

}

export function getLoginOrRegistrationActionFunction({request, params}){

  if (params.authMode === "login"){
    return loginPageActionFunction({request, params});
  }
  else{
    return registrationPageActionFunction({request, params});
  }
  
}
