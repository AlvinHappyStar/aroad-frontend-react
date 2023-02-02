import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Car from './pages/car';
import HGV from './pages/HGV';
import Motor from './pages/motor';
import Navbar from './component/navbar';
import Footer from './component/footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/home' render={(props) => <Home {...props} />} />
        <Route path='/about' render={(props) => <About {...props} />} />
        <Route path='/car_training' render={(props) => <Car {...props} />} />
        <Route path='/hgv_training' render={(props) => <HGV {...props} />} />
        <Route path='/motorcycle_training' render={(props) => <Motor {...props} />} />
        <Redirect to='/home' />
        <Redirect from='/' to='/home' />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
