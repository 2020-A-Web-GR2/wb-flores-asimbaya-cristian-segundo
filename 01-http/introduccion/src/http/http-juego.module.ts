import {Module} from "@nestjs/common";
import {httpJuegoController} from "./http-juego.controller";


@Module({
    imports:[],
    controllers:[
        httpJuegoController
    ],
    providers:[],
})

export class httpJuegoModule {

}

