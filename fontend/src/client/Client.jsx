import Header from '../shared/components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Body  from './body/Body.jsx';
import { Routes, Route  } from 'react-router-dom';

function Client() {
  return (
    <>
    <Header />
    <Body />
    <Footer />
    </>
  );
}
export default Client;