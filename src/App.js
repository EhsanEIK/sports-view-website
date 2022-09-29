import './App.css';
import Blogs from './components/Blogs/Blogs';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
}

export default App;
