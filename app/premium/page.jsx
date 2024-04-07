import Head from "../modeltrain/components/Head";
import Sidebar from "../modeltrain/components/Sidebar";
import Pricing from "./components/pricing";

const Premium = () => {
    return ( 
        <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-grow">
          {/* Head component */}
          <Head />
          <Pricing/>
          {/* Other content for the main section */}
          {/* Add your content here */}
        </div>
      </div>
     );
}
 
export default Premium;