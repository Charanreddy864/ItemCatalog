import { Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './components/homepage'
import ItemDetails from './components/itemdetails'


function App() {

  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/item/:name' element={<ItemDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
