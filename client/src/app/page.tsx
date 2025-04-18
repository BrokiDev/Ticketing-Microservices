import axios from "axios";
import { headers } from "next/headers";
import MainLayout from "./components/layout/MainLayout";

interface IUser {
data:{
  user: {
    name:string
    lastName:string
    email:string
    id:string
  }
}
}

export default async function LandingPage() {
  let data:IUser = {} as IUser
    try {
      const requestHeaders = await headers();
      const cookie = requestHeaders.get("cookie");
      const {data:dataRequest} = await axios.get(
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentUser",
        {
          headers: {
            Host: "ticketing.local",
            Cookie: cookie || "",
          },
          withCredentials: true,
        }
      );
      data = dataRequest;
    } catch (error) {
      console.error("Error fetching data on the server:", error);
    }
  

  return (
    <>
       <MainLayout>
      {data ? <p>Welcome, {data.data?.user?.name}</p> : <p>You are not Signed In</p>}
       </MainLayout>
    </>
  );
}