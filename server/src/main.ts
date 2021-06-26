import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {log} from "util";

const start = async () => {
    try {
        const PORT = process.env.PORT || 5000
        const app = await NestFactory.create(AppModule)
        await app.listen(PORT, () => console.log(`Server Started On Port ${PORT}!!! Happy Hacking :)`))
    }catch (e){
        console.log(e)
    }
}

start()