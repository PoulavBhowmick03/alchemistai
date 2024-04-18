import Head from "../components/Head";
import Sidebar from "../components/Sidebar";
import Train from "../components/train";


const trainmodel = () => {
    return ( 
        <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-grow">
          {/* Head component */}
          <Head />
          <Train/>
          {/* Other content for the main section */}
          {/* Add your content here */}
        </div>
      </div>
     );
}
 
export default trainmodel;