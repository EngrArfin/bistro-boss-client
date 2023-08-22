//import { Helmet } from 'react-helmet-async';
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg';
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import { Helmet } from "react-helmet";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div >
            <Helmet>
                <title>Bistro Boss| Menu</title>
            </Helmet>
            
            <Cover img={menuImg} title= "our menu"></Cover>
            {/* Main Cover */}
            <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"}></SectionTitle>
            {/* Offer Items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* Deseart menu items */}
            <MenuCategory items={dessert} title= "dessert" img={desertImg}></MenuCategory>
            {/* Pizza menu items */}
            <MenuCategory items={pizza} title= "pizza" img={pizzaImg} ></MenuCategory>
            {/* Pizza menu items */}
            <MenuCategory items={salad} title= "salad" img={saladImg} ></MenuCategory>
            {/* Pizza menu items */}
            <MenuCategory items={soup} title= "soup" img={soupImg} ></MenuCategory>
           
            
        </div>
    );
};

export default Menu;