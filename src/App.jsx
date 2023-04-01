import Navbar from "./Component/Navbar/Navbar";
import Banner from "./Component/Banner/Banner";
import {Top_Rated_Movies,Popular,Trending,Upcoming,Top_Rated_Series} from './Url'
import './App.css'
import RowPost from "./Component/Rowpost/Rowpost";
function App() {
  
  return (
    <div className="app">
   
   <Navbar/>
   <Banner/>
  
   <RowPost url={Top_Rated_Movies} title="Top Rated Movies" />
   <RowPost url={Popular} title="Popular" />
   <RowPost url={Trending} title="Trending" />
   <RowPost url={Upcoming} title="Upcoming" />
   <RowPost url={Top_Rated_Series} title="Top Rated Series"/>
   
  
   
    </div>
    
    );
  }
export default App;