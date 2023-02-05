import { AppDataSource } from "./data-source"
import { Product } from "./entity/Product"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const productsRepository = AppDataSource.getRepository(Product)
    const product = new Product()
    product.name = "ยำปูม้า"
    product.price = 60
    await productsRepository.save(product)
    console.log("Saved a new user with id: " + product.id)

    console.log("Loading users from the database...")
    const products = await productsRepository.find()
    console.log("Loaded product: ", products)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
