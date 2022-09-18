import { Route, Routes } from "react-router-dom";
import './App.css';
import './components/layout/Layout.css';
import './components/videos/Videos.css'
import Company from "./components/company/Company";
import Home from './components/home/Home';
import Layout from "./components/layout/Layout";
import Videos from "./components/videos/Videos";


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='company' element={<Company />} />
      </Route>
    </Routes>
  );
}

export default App;
