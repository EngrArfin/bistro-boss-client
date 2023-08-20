
import Banner from '../Banner/Banner';
import Bistro from '../Bistro/Bistro';
import Category from '../Category/Category';
import Chef from '../Chef/Chef';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
//import { Helmet } from 'react-helmet-async';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            {/* <Helmet>
                <h2>Bistro MOss| Menu</h2>
            </Helmet> */}
            <Banner></Banner>
            <Category></Category>
            <Bistro></Bistro>
            <PopularMenu></PopularMenu>
            <Chef></Chef>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;