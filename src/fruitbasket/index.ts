import { calculateTotal, Fruit, Order } from "./fruit";

const fruits: Fruit[] = [
    {
        id: 1,
        name: "Apple",
        price: 1.5,
    },
    {
        id: 2,
        name: "Banana",
        price: 0.5,
    },
    {
        id: 3,
        name: "Orange",
        price: 2.5,
    },
]


const order: Order = {
    id: 1,
    items: [
        {
            id: 1,
            quantity: 2,
        },
        {
            id: 2,
            quantity: 3,
        },
        {
            id: 5,
            quantity: 1,
        }
    ],
}

const total = calculateTotal(order, fruits);
console.log(`Total price: $${total.toFixed(2)}`);