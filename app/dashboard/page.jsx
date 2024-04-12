"use client"
import Head from "./components/Head";
import Sidebar from "./components/Sidebar";
import Body from "./components/body";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const ModelTrain = () => {
  const router = useRouter()
  const {data: session, status} = useSession()
  
  if (status === "unauthenticated") {
    router.push("/")
  }

    return ( 
        <div className="flex h-screen flex-wrap">
        {/* Sidebar */}
        <Sidebar />
  
        {/* Main Content */}
        <div className="flex-grow">
          {/* Head component */}
          <Head />
          <Body/>
          {/* Other content for the main section */}
          {/* Add your content here */}
        </div>
      </div>
      );
}
 
export default ModelTrain;