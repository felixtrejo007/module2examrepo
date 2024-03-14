let userName = ''; // Variable to store user's name
let orders = []; // Array to store orders

function promptName() {
    userName = prompt('Please enter your first name:');
}

function greetUser() {
    if (userName) {
        alert(`Salutations, ${userName}!`);
    } else {
        alert('Please enter your name first.');
    }
}

function addOrder(event) {
    event.preventDefault(); // Prevent form submission
    const burgers = parseInt(document.getElementById('burgers').value);
    const drinks = parseInt(document.getElementById('drinks').value);
    
    const order = {
        Name: userName,
        Burgers: burgers,
        Drinks: drinks,
        Delivered: false
    };
    
    orders.push(order);
    displayOrder(order);
}

function displayOrder(order) {
    const orderList = document.createElement('div');
    orderList.textContent = `${order.Name}, ${generateEmoji(order.Burgers, '🍔')}, ${generateEmoji(order.Drinks, '🥤')} Deliver`;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        removeOrder(orderList, order);
    });
    
    orderList.appendChild(removeButton);
    document.body.appendChild(orderList);
}

function generateEmoji(quantity, emoji) {
    if (quantity <= 3) {
        return emoji.repeat(quantity);
    } else {
        return `${emoji}x${quantity}`;
    }
}

function removeOrder(orderElement, order) {
    orderElement.remove();
    orders = orders.filter(o => o !== order);
}

function outputOrderDetails() {
    const totalOrders = orders.length;
    const totalBurgers = orders.reduce((acc, curr) => acc + curr.Burgers, 0);
    const totalDrinks = orders.reduce((acc, curr) => acc + curr.Drinks, 0);
    const totalDelivered = orders.filter(o => o.Delivered).length;
    const totalUndelivered = totalOrders - totalDelivered;

    console.log(`Total Orders: ${totalOrders}, Total Burgers: ${totalBurgers}, Total Drinks: ${totalDrinks}`);
    console.log(`Total Delivered: ${totalDelivered}`);
    console.log(`Total Undelivered: ${totalUndelivered}`);
}
