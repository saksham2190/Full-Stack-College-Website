import './Approval.css';

import logo1 from './logo/1.jpg';
import logo2 from './logo/2.jpg';
import logo3 from './logo/3.jpg';
import logo4 from './logo/4.jpg';
import logo5 from './logo/5.jpg';
import logo6 from './logo/6.jpg';
import logo7 from './logo/7.jpg';
import logo8 from './logo/8.jpg';
import logo9 from './logo/9.jpg';
import logo10 from './logo/10.jpg';

function App() {
  return (
    <div>
      <div className="logos">
        <div className="logos-slide">
          <img src={logo1} alt="Approval 1" />
          <img src={logo2} alt="Approval 2" />
          <img src={logo3} alt="Approval 3" />
          <img src={logo4} alt="Approval 4" />
          <img src={logo5} alt="Approval 5" />
          <img src={logo6} alt="Approval 6" />
          <img src={logo7} alt="Approval 7" />
          <img src={logo8} alt="Approval 8" />
          <img src={logo9} alt="Approval 9" />
          <img src={logo10} alt="Approval 10" />
        </div>
      </div>
    </div>
  );
}

export default App;
