/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";

interface UseRequestProps {
  method: "get" | "post" | "put" | "delete";
    URL: string;
    body?: any;
    headers?: AxiosRequestConfig<any> | undefined;
}


const useRequest = ({method = "get",URL,body,headers}:UseRequestProps) => {
    const [data, setData] = useState<any>(null);
    const [errors, setErrors] = useState<any>(null);
    
    const makeRequest = async () => {
        try {
        const response = await axios[method](URL, body,{
            ...headers,
        });
        setData(response.data);
        } catch (error:any) {
        setErrors(error.response.data.errors);
        }
    };
    
    return { data, errors, makeRequest };

}

export default useRequest