interface Product{
    id: number;
    img: object;
    title: string;
    description: string;
    price: number;
}

const Products: Product[] = [
    {
        id: 1,       
        img: {url: '../img/movie1.jpg'},       
        title: 'Thor',
        description: 'Thor is a good movie about a god.',
        price: 149
    },{
        id: 2,
        img: {url: '../img/movie2.jpg'},
        title: 'James Bond',
        description: 'My name is Bond, James Bond 007',
        price: 129
    },{
        id: 3,
        img: {url:'../img/movie3.jpg'},
        title: 'Joker',
        description: 'Psychopath that likes to kill people.',
        price: 179
    },{
        id: 4,
        img: {url:'../img/movie2.jpg'},
        title: 'James Bond',
        description: 'My name is Bond, James Bond 007',
        price: 129
    },{
        id: 5,
        img: {url:'../img/movie3.jpg'},
        title: 'Joker',
        description: 'Psychopath that likes to kill people.',
        price: 179
    },{
        id: 6,
        img: {url:'../img/movie1.jpg'},
        title: 'Thor',
        description: 'Thor is a good movie about a god.',
        price: 149
    }
]
export default Products;