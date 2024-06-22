import { createContext, useContext, useReducer } from "react";
import { apiLogin } from "../services/apiAuthentication";






const AuthContext=createContext();



const initialState={
    user:null,
    isAuthenticated:false
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'login':
            return {...state,user:action.payload,isAuthenticated:true};
        case 'logout':
            return {...state,user:null,isAuthenticated:false}
        default:
            throw new Error("Unknown action");
    }
}

const FAKE_USER={
    name:"Tai",
    email:"tai@gmail.com",
    password:"password",
    avatar:"null"
}


const AuthProvider = ({children}) => {
    const [{user,isAuthenticated},dispatch]=useReducer(reducer,initialState)
    const login=(email:string,password:string)=>{
        dispatch({type:"login",payload:FAKE_USER})
        // apiLogin(email,password).then((res)=>{
        //     dispatch({type:"login",payload:FAKE_USER})
        // }).catch((err)=>{
        //     console.log(err);
        // })
        }
    
    const logout=()=>{
        dispatch({type:"logout"});
    }

  return (
    <AuthContext.Provider value={{user,isAuthenticated,
        login,logout}}>{children}
    </AuthContext.Provider>
  )
}


const useAuth = () => {
    const context=useContext(AuthContext);
    if(context===undefined){
        throw new Error("AuthContext was used outside AuthProvider")
    }
    return context;
}


export {AuthProvider,useAuth}