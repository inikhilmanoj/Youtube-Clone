import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage'
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    // BEM 
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          
        <Route path='/search'>
        <div class="app-page">
             <Sidebar />
              <SearchPage />

          </div>
           

          </Route>
          <Route path='/'>
          <div class="app-page">
             <Sidebar />
              <RecommendedVideos />

          </div>
          </Route>
        </Switch>
      </Router>

      


    </div>
  );
}

export default App;
