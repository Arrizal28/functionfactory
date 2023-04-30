// Membuat objek Product
const product1 = {
  name: "iPhone",
  price: 999,
  getInfo: function () {
    return `Name: ${this.name}, Price: $${this.price}`;
  },
};

const product2 = {
  name: "MacBook",
  price: 1499,
  getInfo: function () {
    return `Name: ${this.name}, Price: $${this.price}`;
  },
};

const product3 = {
  name: "iPad",
  price: 499,
  getInfo: function () {
    return `Name: ${this.name}, Price: $${this.price}`;
  },
};

// Membuat objek Order
const order1 = {
  customer: "John Doe",
  products: [product1, product2],
  getTotal: function () {
    let total = 0;
    for (const product of this.products) {
      total += product.price;
    }
    return total;
  },
  getInfo: function () {
    let info = `Customer: ${this.customer}\nProducts:\n`;
    for (const product of this.products) {
      info += `- ${product.getInfo()}\n`;
    }
    info += `Total: $${this.getTotal()}`;
    return info;
  },
};

const order2 = {
  customer: "Jane Smith",
  products: [product2, product3],
  getTotal: function () {
    let total = 0;
    for (const product of this.products) {
      total += product.price;
    }
    return total;
  },
  getInfo: function () {
    let info = `Customer: ${this.customer}\nProducts:\n`;
    for (const product of this.products) {
      info += `- ${product.getInfo()}\n`;
    }
    info += `Total: $${this.getTotal()}`;
    return info;
  },
};

// Mengakses method getInfo pada objek Order
console.log(order1.getInfo());
console.log(order2.getInfo());
