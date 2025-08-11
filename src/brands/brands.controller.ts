import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrandsService } from './brands.service';

@Controller('brands')
export class BrandsController {



  //inyeccion de dependencias
  //inyectar un componente para uso en otro
  //sin tener que instanciarlo
   constructor(private readonly brandsService: BrandsService) {}
  

  @Post()
  create(@Body() body) {
    return this.brandsService.create(body)
  }

  @Get()
  findAll() {
    return this.brandsService.findAll();
    //return "aqui se van a listar las brands";

  }

  //consultar un resource por id
  //una brand

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandsService.findOne(+id);
  }

    @Patch(':id')
    update(@Param('id') id: string) {
      return "aqui se actualizara" +
              "la brand con id: " + id;
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
     return {
      "success" : true,
      "mensaje" : this.brandsService.remove(+id)
     }
    }
  }
