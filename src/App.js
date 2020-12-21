import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Switch, Route, Link } from 'react-router-dom';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>);
}

const TopicList = (props) => (
  <div>
  <br/>
  <Link to="/">HOME</Link>
  <br/>
 <h1>TOPIC LIST PAGE</h1>
 <br/>
 <Link to={`${props.match.url}/13`}>Topic 13</Link>
 <Link to={`${props.match.url}/14`}>Topic 14</Link>
 <Link to={`${props.match.url}/15`}>Topic 15</Link>

  </div>
)

const TopicDetail = (props) => {
return (
  <div>
    <h1>TOPIC DETAIL PAGE: {props.match.params.topicId} </h1>
  </div>
)}

function App() {
  return (
    <div>
      <Switch>
      </Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
      <Route exact path="/topics" component={TopicList} />
      <Route path="/topics/:topicId" component={TopicDetail} />
    </div>
  );
}

export default App;
