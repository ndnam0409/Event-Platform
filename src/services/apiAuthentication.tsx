import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

// export default axiosInstance;

const apiLogin = async (email:string,password:string) => {
    const response = await axiosInstance({
      method: "post",
      url: `/api/login`,
      data: {
          body: JSON.stringify({ email, password }),
      },
    });
    console.log(response)
    return response.data;
  };
  
  const apiRegister = async (name:string,email:string,password:string) => {
    const response = await axiosInstance({
      method: "post",
      url: `/api/login`,
      data: {
          body: JSON.stringify({ name,email, password,role:"user" }),
      },
    });
    console.log(response)
    return response.data;
  };
  
export {apiLogin,apiRegister};
  