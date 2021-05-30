import { HttpClient } from "../httpClient";

class ProductsService extends HttpClient {
    constructor() {
        super("https://isko88.github.io");
    }

    getProducts() {
        return this.get("coffee.json");
    }
}

export const productsService = new ProductsService();