import './Collab.css';

import bukhara from './univ/bukhara.jpg';
import burev from './univ/burev.jpg';
import erzincan from './univ/erzincan.jpg';
import hellenic from './univ/hellenic.jpg';
import moscow from './univ/Moscow-Polytechnic-University.jpg';
import pavlodar from './univ/pavlodar.jpg';
import sunway from './univ/sunway.jpg';
import swissInsti from './univ/swiss insti.jpg';
import thumbay from './univ/Thumbay-University-Dubai.jpg';
import unitar from './univ/unitar.jpg';
import utm from './univ/utm.jpg';
import yaroslav from './univ/yaroslav.jpg';

function App() {
  return (
    <div>
      <div className="logos">
        <div className="logos-slide">
          <img src={bukhara} alt="Bukhara University" />
          <img src={burev} alt="Burev University" />
          <img src={erzincan} alt="Erzincan University" />
          <img src={hellenic} alt="Hellenic University" />
          <img src={moscow} alt="Moscow Polytechnic University" />
          <img src={pavlodar} alt="Pavlodar University" />
          <img src={sunway} alt="Sunway University" />
          <img src={swissInsti} alt="Swiss Institute" />
          <img src={thumbay} alt="Thumbay University Dubai" />
          <img src={unitar} alt="Unitar" />
          <img src={utm} alt="UTM" />
          <img src={yaroslav} alt="Yaroslav" />
        </div>
      </div>
    </div>
  );
}

export default App;