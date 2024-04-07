import Head from "./components/Head";
import Sidebar from "./components/Sidebar";
import Body from "./components/body";
const ModelTrain = () => {
    return ( 
        <div className="flex h-screen">
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