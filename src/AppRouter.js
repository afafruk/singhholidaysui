import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import home from './components/pages/Home'
import Destinations from './Pages/Destinations';
import Tours from './Pages/Tours';
import ToursDetails from './Pages/TourDetails';
import DestinationsDetails from './Pages/DestinamtionsDetails';
import ContactUs from './Pages/ContactUs'
import BookingDetails from './Pages/BookingDetails';
import StripePayment from './Component/PymentGateway/StripePayment'
import PaymentDone from './Component/PymentGateway/PaymentDone'
function AppRouter() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <Header/> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' component={home} />
          <Route path='/destinations' component={Destinations} />
          <Route path="/destinationdetails" component={DestinationsDetails}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/tours" component={Tours}/>
          <Route path="/tourdetails" component={ToursDetails}/>
          <Route path="/bookingdetails" component={BookingDetails}/>
          <Route path="/contact" component={ContactUs}/>
          <Route path="/stripepayment" component={StripePayment}/>
          <Route path="/paymentdone/:id" component={PaymentDone}/>
        </Switch>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default AppRouter;
