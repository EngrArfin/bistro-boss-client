import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import Bistro from '../Bistro/Bistro';
import Category from '../Category/Category';
import Chef from '../Chef/Chef';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
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