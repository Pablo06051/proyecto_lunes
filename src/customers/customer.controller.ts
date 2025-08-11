import { Controller, 
        Get,
        Post,
        Patch,
        Delete, 
        Body,
        Param } from '@nestjs/common';
import { CustomersService } from './customers.services';

@Controller('notificaciones')
export class NotificacionesController {

    constructor(private readonly customersService: CustomersService) {}

    @Post()
    create(@Body() body) {
        return this.customersService.create(body);
    }

    @Get()
    findAll() {
        return this.customersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.customersService.findOne(+id);
    }
    
    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return this.customersService.update(+id, body);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
        return {
            success: true,
            mensaje: this.customersService.remove(+id)
        };
    }
}