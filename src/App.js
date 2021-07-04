import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Login from './Login';
import { useStateValue } from './contextApi/StateProvider';



// first state to provide in react reducer

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">

    {!user ? (
     <Login />
    ) : (
      <>
      <Header  />
      <div className="app_body">
      <Sidebar />
      <Feed />
      <Widget />
      </div>
</>


    )}
 


        </div>
  );
}


export default App;
