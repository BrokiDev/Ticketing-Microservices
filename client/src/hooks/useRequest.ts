/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";

interface UseRequestProps {
  method: "get" | "post" | "put" | "delete";
    URL: string;
    body?: any;
    headers?: AxiosRequestConfig<any> | undefined;
}

interface UseRequestReturn<K,E = any> {
    data: K | null;
    errors: E | null;
    makeRequest: () => Promise<void>;
}


const useRequest = <K,E = any>({method = "get",URL,body,headers}:UseRequestProps):UseRequestReturn<K,E> => {
    const [data, setData] = useState<K | null>(null);
    const [errors, setErrors] = useState<E | null>(null);
    
    const makeRequest = async () =>  {
        try {
        const response = await axios[method](URL, body,{
            ...headers,
        });
        setData(response.data);
        } catch (error:any) {
        setErrors(error.response?.data?.errors || error.message);
        }
    };
    
    return { data, errors, makeRequest };

}

export default useRequest