import logo from './logo.svg';
import './App.css';
import AverageRating from './components/Rating';
import Reviews from './components/Reviews';
import SentimentAnalysis from './components/Sentimentanalysis';
import WebsiteVisitors from './components/Visitors';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
      <div className="main">
       <Sidebar/> 
       <div className="container1">
       <div className="container2">
        <Reviews/>
        <AverageRating/>
        <SentimentAnalysis/>
        </div>
        <WebsiteVisitors/>
       </div>
      </div>
    </div>
  );
}

export default App;
