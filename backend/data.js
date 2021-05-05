import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
        {
           
            name:"Nike slim shirt",
            category:"Shirts",
            images:"/images/p1.jpg",
            price: 120,
            countInStock:10,
            brand:  "Nike",
            rating: 3,
            numReviews: 15,
            description:    "high quality product"
        },
        {
            
            name:"Adidas fit shirt",
            category:"Shirts",
            images:"/images/p2.jpg",
            price: 120,
            countInStock:20,
            brand:  "Adidas",
            rating: 4.5,
            numReviews: 8,
            description:    "high quality product"
        },
        {
            
            name:"Lacosta free shirt",
            category:"Shirts",
            images:"/images/p3.jpg",
            price: 120,
            countInStock:3,
            brand:  "Lacosta",
            rating: 4.5,
            numReviews: 10,
            description:    "high quality product"
        },
        {
            
            name:"Lacosta slim pants",
            category:"Pants",
            images:"/images/p4.jpg",
            price: 120,
            countInStock:1,
            brand:  "Nike",
            rating: 4.5,
            numReviews: 7,
            description:    "high quality product"
        },
        {
            
            name:"Nike slim pant",
            category:"Pants",
            images:"/images/p5.jpg",
            price: 120,
            countInStock:0,
            brand:  "Nike",
            rating: 2,
            numReviews: 4,
            description:    "high quality product"
        },{
            
            name:"Adidas fit pant",
            category:"Pants",
            images:"/images/p6.jpg",
            price: 120,
            countInStock:4,
            brand:  "Adidas",
            rating: 4.5,
            numReviews: 2,
            description:    "high quality product"
        }
    ]
}

export default data;