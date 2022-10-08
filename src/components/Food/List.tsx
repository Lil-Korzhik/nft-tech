import { FC } from 'react';
import ListItem from './ListItem';

const List: FC = (): JSX.Element => {
    return (
        <ul className="food-list">
            <ListItem 
                img="/img/food/list/first-img.jpg" 
                title="Frankie Brooklyn Pizza" 
                description="4.8 Рекомендуем" 
            />

            <ListItem 
                img="/img/food/list/second-img.jpg" 
                title="Frankie Brooklyn Pizza" 
                description="4.8 Рекомендуем" 
            />

            <ListItem 
                img="/img/food/list/third-img.jpg" 
                title="Frankie Brooklyn Pizza" 
                description="4.8 Рекомендуем" 
            />

            <ListItem 
                img="/img/food/list/fourth-img.jpg" 
                title="Frankie Brooklyn Pizza" 
                description="4.8 Рекомендуем" 
            />

            <ListItem 
                img="/img/food/list/fifth-img.jpg" 
                title="Frankie Brooklyn Pizza" 
                description="4.8 Рекомендуем" 
            />

            <ListItem 
                img="/img/food/list/sixth-img.jpg" 
                title="Frankie Brooklyn Pizza" 
                description="4.8 Рекомендуем" 
            />

            <ListItem 
                img="/img/food/list/seventh-img.jpg" 
                title="Frankie Brooklyn Pizza" 
                description="4.8 Рекомендуем" 
            />

            <ListItem 
                img="/img/food/list/eighth-img.jpg" 
                title="Frankie Brooklyn Pizza" 
                description="4.8 Рекомендуем" 
            />
        </ul>
    );
}

export default List;