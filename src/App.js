import SideBar from "./component/sidebar/SideBar";
import TopBar from "./component/topbar/TopBar";
import './App.css'

function App() {
  return (
    <div>
        <TopBar/>
        <div className="container">
          <SideBar/>
          <div className="others">
              Other pages

          </div>
        </div>
    </div>
  );
}

export default App;
