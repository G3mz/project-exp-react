import Promo from '../homepage/promo/promo.jsx';
import Block from '../homepage/block/Block.jsx';
import Achivments from '../homepage/achivments/achivments.jsx';
import Sponsors from '../homepage/sponsors/sponsors.jsx';
import YandexMap from '../homepage/map/map.jsx';


function HomePage() {
  
  return (
    <div className='HomePage'>
      <Promo/>
        <Block/>
        <Sponsors/>
        <Achivments/>
        <YandexMap/>
    </div>
  );
}

export default HomePage;