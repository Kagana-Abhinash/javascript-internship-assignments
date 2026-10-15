
console.log("--- Initializing Inventory System ---");

// Step 1: Initial inventory
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

console.log("Initial Inventory:");
console.log(inventory);

// Step 2: Ask for a new product
let productName = prompt("Enter new product name:");
let productPrice = Number(prompt("Enter product price:"));

// Step 3: Create the new product
const newProduct = {
    name: productName,
    price: productPrice
};

// Step 4: Add it to the inventory
inventory.push(newProduct);

// Step 5: Display the updated inventory
console.log("New Product Added:");
console.log(newProduct);

console.log("Updated Inventory:");
console.log(inventory);

console.log("--- Processing Inventory Roster ---");

function getCategory(price) {
    if (price < 100) {
        return "Budget";
    } else if (price < 200) {
        return "Standard";
    } else {
        return "Premium";
    }
}

function getBadge(category) {
    switch (category) {
        case "Budget":
            return "Budget";
        case "Standard":
            return "Standard";
        case "Premium":
            return "Premium";
        default:
            return "Unknown";
    }
}

inventory.forEach(function(product) {
    const category = getCategory(product.price);
    const badge = getBadge(category);

    console.log(
        "* Item: " + product.name +
        " ($" + product.price +
        ") -> Category: " + badge
    );
});

console.log("--- Financial Analytics ---");

function calculateTotal(items) {
    let total = 0;

    for (const item of items) {
        total += item.price;
    }

    return total;
}

const totalValue = calculateTotal(inventory);

console.log("Total Inventory Value: $" + totalValue);

const affordable = inventory.filter(function(product) {
    return product.price < 200;
});

const affordableNames = affordable.map(function(product) {
    return product.name;
});

console.log(
    "Filtered Affordable Items (Under $200):",
    JSON.stringify(affordableNames)
);

console.log("--- Formatted Report ---");

const report = inventory.map(function(product) {
    return product.name.toUpperCase() + ": $" + product.price;
});

console.log("Formatted Report List:", JSON.stringify(report));
