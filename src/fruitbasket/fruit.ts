export type Fruit = {
    id: number,
    name: string,
    price: number,
}

export type OrderItem = {
    id: number,
    quantity: number,
}

export type Order = {
    id: number,
    items: OrderItem[],
}

/**
 * Gets a fruit by its id
 * @param fruits the list of fruits
 * @param id the id of the fruit to find
 * @returns the fruit with the given id, or undefined if not found
 */
const getFruitById = (fruits: Fruit[], id: number): Fruit | undefined => {
    const fruit = fruits.find((fruit) => fruit.id === id);

    return fruit;
}

/**
 * Gets the price of an order item
 * @param item the order item
 * @param fruits the list of fruits
 * @returns the price of the order item or 0 if the fruit is not found
 */
const getPrice = (item: OrderItem, fruits: Fruit[]): number => {
    const fruit = getFruitById(fruits, item.id);

    if (fruit) {
        return fruit.price * item.quantity;
    }

    return 0;
}

/**
 * Gets the total price of an order
 * @param order the order to calculate the total for
 * @param fruits the list of fruits
 * @returns the total price of the order
 */
export const calculateTotal = (order: Order, fruits: Fruit[]) => {
    let total = 0;

    for (const item of order.items) {
        const price = getPrice(item, fruits);
        total += price;
    }

    return total;
} 