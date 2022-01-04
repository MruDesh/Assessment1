import logo from './logo.svg';
import './App.css';
import ArticleStore from './components/articleStore';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddArticle from './components/addArticle';


function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path='/' exact component={ArticleStore} />
          <Route path='/article-add' component={AddArticle} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
