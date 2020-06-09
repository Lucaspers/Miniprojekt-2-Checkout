interface Product{
    id: number;
    img: string;
    title: string;
    description: string;
    price: number;
    featured: string;
}

const Products: Product[] = [
    {
        id: 1,
        img: require('../img/movie1.jpg'),
        title: 'Thor',
        description: 'Thor is a good movie about a god.',
        price: 149,
        featured: 'true'
    },{
        id: 2,
        img: require('../img/movie2.jpg'),
        title: 'James Bond',
        description: 'My name is Bond, James Bond 007',
        price: 129,
        featured: 'true'
    },{
        id: 3,
        img: require('../img/movie3.jpg'),
        title: 'Joker',
        description: 'Psychopath that likes to kill people.',
        price: 179,
        featured: 'true'
    },{
        id: 4,
        img: require('../img/movie2.jpg'),
        title: 'James Bond',
        description: 'My name is Bond, James Bond 007',
        price: 129,
        featured: 'true'
    },{
        id: 5,
        img: require('../img/movie3.jpg'),
        title: 'Joker',
        description: 'Psychopath that likes to kill people.',
        price: 179,
        featured: 'true'
    },{
        id: 6,
        img: require('../img/movie1.jpg'),
        title: 'Thor',
        description: 'Thor is a good movie about a god.',
        price: 149,
        featured: 'true'
    }
]
export default Products;