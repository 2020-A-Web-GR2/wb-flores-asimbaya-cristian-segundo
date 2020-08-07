import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /*  START CONFIGURATION
  *  Aaqui hay que hacer todas las configuraciones extra
  * segun lo que necesitemos.
  * */



  /* END OF CONFIGURATION */
  await app.listen(3001);
}
bootstrap();
