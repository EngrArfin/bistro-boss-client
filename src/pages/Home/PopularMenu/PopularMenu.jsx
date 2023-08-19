import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { data } from 'autoprefixer';
import Category from '../Category/Category';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const PopularItems = data.filter(item => item.category === 'popular');

            setMenu(PopularItems)} ) 
    } ,[])
      
    return (
        <section className='mb-12'>
            <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem> )
                }
            </div>
            <div className='item-center'>
            <button className="btn btn-outline  border-0 border-b-4 mt-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;