import { Controller, 
        Get,
        Post,
        Put,
        Patch,
        Delete, 
        Body,
        Param} from '@nestjs/common';
import { CustomersService } from './customers.services';

@Controller('customers')
export class CustomerController {

    constructor(private readonly CustomersServices: CustomersService) {}

    @Post()
    create(@Body() body) {
        return this.CustomersServices.create(body)
    }

    @Get()
    findAll() {
        return this.CustomersServices.findAll();

    }

    @Get(':id')
      findOne(@Param('id') id: string) {
        return this.CustomersServices.findOne(+id);
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
          "mensaje" : this.CustomersServices.remove(+id)
         }
        }
      
    



}
