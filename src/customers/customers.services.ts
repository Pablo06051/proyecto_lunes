import { Notificaciones } from "./entities/customers.entity";
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {

    private customers: Notificaciones[] = [
        {
            id: 1,
            nombre: "Ivan Yate",
            mensaje: "Bienvenido a la plataforma",
            fechaEnvio: new Date("2025-08-11"),

        }
    ]

    findAll(){
        return this.customers
    }

    findOne(id: number) {
        let Notificaciones = this.customers.find(function(usuario){
            return Notificaciones.id === id;
        })
        return Notificaciones;
    }

    create(body){
        this.customers.push(body)
        return body;
    }

    remove(id: number) {
        this.customers = this.customers.filter(
            function(Notificaciones){
                return Notificaciones.id 
            }
        )
    }
}
  