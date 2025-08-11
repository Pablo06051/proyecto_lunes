import { usuario } from "./entities/customers.entity";
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {

    private customers: usuario[] = [
        {
            id: 1,
            nombreUsuario: "Juan",
            apellidoUsuario: "perez",
            email: "juan23@gmail.com",
            telefono: "3129456547",
            ubicacion: "calle 87 #34-43",
            fechaNacimiento: new Date,
            fechaRegistro: new Date

        },

        {
            id: 2,
            nombreUsuario: "Pablo",
            apellidoUsuario: "Bernal",
            email: "pablojulian@gmail.com",
            ubicacion: "calle 69c sur #70D-54",
            telefono: "3123423421",
            fechaNacimiento: new Date,
            fechaRegistro: new Date 
        },
    ]

    findAll(){
        return this.customers
    }

    findOne(id: number) {
        let usuario = this.customers.find(function(usuario){
            return usuario.id === id;
        })
        return usuario;
    }

    create(body){
        this.customers.push(body)
        return body;
    }

    remove(id: number) {
        this.customers = this.customers.filter(
            function(usuario){
                return usuario.id 
            }
        )
    }
}
  