// Membuat function factory untuk membuat objek Product
function createProduct(name, price) {
  // Membuat objek kosong
  const product = {};

  // Menambahkan properti ke objek product
  product.name = name;
  product.price = price;

  // Menambahkan method ke objek product
  product.getInfo = function () {
    return `Name: ${this.name}, Price: $${this.price}`;
  };

  // Mengembalikan objek product
  return product;
}

// Membuat function factory untuk membuat objek Order
function createOrder(customer, products) {
  // Membuat objek kosong
  const order = {};

  // Menambahkan properti ke objek order
  order.customer = customer;
  order.products = products;

  // Menambahkan method ke objek order
  order.getTotal = function () {
    let total = 0;
    for (const product of this.products) {
      total += product.price;
    }
    return total;
  };

  order.getInfo = function () {
    let info = `Customer: ${this.customer}\nProducts:\n`;
    for (const product of this.products) {
      info += `- ${product.getInfo()}\n`;
    }
    info += `Total: $${this.getTotal()}`;
    return info;
  };

  // Mengembalikan objek order
  return order;
}

// Membuat beberapa objek Product menggunakan function factory
const product1 = createProduct("iPhone", 999);
const product2 = createProduct("MacBook", 1499);
const product3 = createProduct("iPad", 499);

// Membuat objek Order menggunakan function factory dan objek Product yang telah dibuat
const order1 = createOrder("John Doe", [product1, product2]);
const order2 = createOrder("Jane Smith", [product2, product3]);

// Mengakses method getInfo pada objek Order
console.log(order1.getInfo());
console.log(order2.getInfo());
