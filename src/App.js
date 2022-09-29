import './App.css';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MiddleContent from './components/MiddleContent/MiddleContent';

function App() {
  return (
    <div>
      <Header></Header>
      <MiddleContent></MiddleContent>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
}

export default App;
