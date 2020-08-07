import {BadRequestException, Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Query} from "@nestjs/common";
import {appendSuffixesIfMatch} from "ts-loader/dist/utils";
import {types} from "util";




@Controller( 'juego-http')
export class httpJuegoController{

    @Get('hola')
    @HttpCode(201)
    holaGet(){

        throw new BadRequestException('NO envia nada'); // Envia el codifo bad request.


     //   return 'Hola mundo :3 Get'
    }

    @Post('hola')
    @HttpCode(202)
    holaPost(){
        return 'Hola mundo :3 Post';
    }

    @Delete('hola')
    @HttpCode(204)
    @Header('Cache-control','none')
    @Header('EPN','Probando las cosas')
    holadelete(){
        return 'Hola mundo :3 Delete';
    }

    /*
    *  Los parametros de ruta que vamos a usar son:
    *  http://localhost:3001/juego-http/parametros-ruta/19/gestion/44
    *  El 19 y el 44 son los datos que se pasan a través de los parametros.
    * */

    @Get('/parametros-ruta/:edad/gestion/:altura')
    parametrosRutaEjemplo(
        @Param() parametrosRuta
    ){
        console.log('Parametros: ', parametrosRuta);
        console.log('\n la altura es', parametrosRuta['altura']);// asi podemos recuperar la edad y la altura.


        isNaN(parametrosRuta.edad);
        isNaN(parametrosRuta.altura)
        const altura = Number(parametrosRuta.altura);
        const edad = Number(parametrosRuta.edad); // asi podemos recuperar en tipo de numero.
        console.log('\n La edad en numero es: ', edad);
        const suma =  altura + edad;
        //return 'ok';
        return '<h1>El valor de la suma es: '+suma+' </h1>';
        //return 'ola?'
    }
    //parametros de ruta y de consulta xD xD XD

    //  http://localhost:3001/juego-http/parametros-consulta
    @Get('parametros-consulta')
    parametrosConsulta(
        @Query() parametrosDeConsulta
    ){
        // cuando lleguen el nombre y el apeliido vamos a responder los nombres y apellidos concatenados
        //cuando llegue uno solo solo vamos a responder con carita feliz


        const nombre = String(parametrosDeConsulta.nombre);
        const apellido = String(parametrosDeConsulta.apellido);

        console.log('parametros de consulta: ',parametrosDeConsulta);
        console.log('\n El nombre es: ', nombre);
        console.log('\n El apellido es: ', apellido);


        if(typeof parametrosDeConsulta.apellido === 'string' && typeof parametrosDeConsulta.nombre === 'string'){
            console.log(nombre+' '+apellido);
            return nombre+' '+apellido;
        } else{
            return ' no oki :C'
        }

        //solución del inge
        const tieneNombreYApeliido = parametrosDeConsulta.nombre != undefined && parametrosDeConsulta.apellido != undefined;
        if(tieneNombreYApeliido){
            console.log(nombre+' '+apellido);
            return nombre+' '+apellido;
        } else{
            return ' no oki :C'
        }
    }

    @Post('parametros-cuerpo')
    parametrosDeCuerpoD(
        @Body() parametrosCuerpo
    ) {
        console.log('Parametros de cuerpo', parametrosCuerpo);
        return parametrosCuerpo;
    }



}

