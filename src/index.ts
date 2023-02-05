import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const usersRepository = AppDataSource.getRepository(User)
    const user = new User()
    user.login = "user1"
    user.name = "User 1"
    user.password = "Pass@1234"
    await usersRepository.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await usersRepository.find()
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
