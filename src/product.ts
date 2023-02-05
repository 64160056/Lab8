import { AppDataSource } from "./data-source"
import { Product } from "./entity/Product"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const productsRepository = AppDataSource.getRepository(Product)
    
    const products = await productsRepository.find()
    console.log("Loaded product: ", products)

    const updatedProduct = await productsRepository.findOneBy({id: 1})
    console.log(updatedProduct)
    updatedProduct.price = 55
    await productsRepository.save(updatedProduct)

}).catch(error => console.log(error))
