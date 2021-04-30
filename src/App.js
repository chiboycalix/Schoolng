import './App.scss';
import Features from './sections/Features';
import WithSchoolng from './sections/WithSchooln';
import Header from './sections/Header';
import HowItWorks from './sections/HowItWorks';
import GetInTouch from './sections/GetInTouch';
import Footer from './components/Footer';

function App() {
  return (
    <div className="appWrapper">
      <Header />
      <HowItWorks />
      <WithSchoolng />
      <Features />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
