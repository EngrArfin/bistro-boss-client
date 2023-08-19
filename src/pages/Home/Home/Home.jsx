
import Banner from '../Banner/Banner';
import Bistro from '../Bistro/Bistro';
import Category from '../Category/Category';
import Chef from '../Chef/Chef';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Teastimonials from '../Teastimonials/Teastimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Bistro></Bistro>
            <PopularMenu></PopularMenu>
            <Chef></Chef>
            <Featured></Featured>
            <Teastimonials></Teastimonials>
            
        </div>
    );
};

export default Home;