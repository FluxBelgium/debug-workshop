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

const app = document.getElementById("app")!;

// Show fruits.
const fruitsSection = document.createElement("section");
const fruitsHeader = document.createElement("h1");

fruitsHeader.textContent = "Fruits";
fruitsSection.appendChild(fruitsHeader);

for (const fruit of fruits) {
    const element = document.createElement("p");
    element.textContent = `ID: ${fruit.id}, Name: ${fruit.name}, Price: €${fruit.price.toFixed(2)}`
    fruitsSection.appendChild(element);
}

app.appendChild(fruitsSection);

// Create header for fruits.
const orderSection = document.createElement("section");
const orderHeader = document.createElement("h1");

orderHeader.textContent = "Order";
orderSection.appendChild(orderHeader);

for (const item of order.items) {
    const element = document.createElement("p");
    element.textContent = `Fruit ID: ${item.id}, Quantity: ${item.quantity}`
    orderSection.appendChild(element);
}

app.appendChild(orderSection);

const calculateButton = document.createElement("button");
const result = document.createElement("p");

result.textContent = "€0";
calculateButton.textContent = "Calculate order price";
calculateButton.addEventListener("click", () => {
    const total = calculateTotal(order, fruits);
    result.textContent = `€${total.toFixed(2)}`
})

app.appendChild(calculateButton);
app.appendChild(result);
