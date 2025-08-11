import { Body, Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';



     //private: solo se puede usar
    //          al interior de la clase
    //          con this
    
 @Injectable()  
export class BrandsService {


   private  brands: Brand[] = [
      {
        id:1,
        name:"Toyota",
        description:"Marca Japonesa",
        createdAT: new Date

      },
      
      {
        id:2,
        name:"BYD",
        description:"vehiculos electricos",
        createdAT: new Date
      },

    ]



  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    let marca = this.brands.find(function(brand){
      //si la encuentro la retorno 
      return brand.id === id;
    })

    return marca;

    //añadir al arreglo de brands
  //la brand que esta llegando
  //por el body

  
  }

  //añadir al arreglo de brands
  //la brand que esta llegando
  //por el body

  create(body){
    this.brands.push(body)
    return body;
  }


  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  //eliminar un elemento del areglo
  //por id

  remove(id: number) {
    //filter es para retornar un nuevo arreglo 
    //con elemtos que cumplan 
    //la condicional
    this.brands = this.brands.filter(
      function(brand){
        return brand.id !== id
      }
    )

    return "elemento eliminado"
  }
  
}
