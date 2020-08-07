import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {httpJuegoModule} from "./http/http-juego.module";

@Module({
  imports: [
      // Aqui van los modulos
    httpJuegoModule
  ],
  controllers: [
      // controladores APP module
      AppController
  ],
  providers: [
      //Servicios APP module.
      AppService
  ],
})
export class AppModule {}
