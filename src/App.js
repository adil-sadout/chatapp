import TopBar from "./TopBar"
import BottomBar from "./BottomBar"
import Main from "./Main"
import { v4 as uuidv4 } from 'uuid';

function App() {

  console.log(process.env.REACT_APP_APIKEY)

  return (
    <div className="vh-100">

      <div className="py-5 row col-12 col-sm-10 col-md-8 mx-auto h-90 d-flex justify-content-center align-items-center">
        <div  className="container focusColor rounded-top bg-light w-100 h-10 p-2 d-flex justify-content-between align-items-center minheight45" id="topBar">
          <TopBar/>
        </div>
        

        <div className="h-80 w-100 bg-gray p-4" id="main">
          
          <Main />

          

          

          
          
          
        </div>

        <div className="input-group rounded-bottom h-10 border-0 d-flex align-items-center bg-white w-100 minheight45" id="botBar">
          <BottomBar/>
        </div>
        
        
      </div>
    </div>
  );
}

export default App;
