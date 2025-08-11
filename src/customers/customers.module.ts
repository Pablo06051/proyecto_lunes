import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { Notificaciones } from './entities/customers.entity';
import { CustomersService } from './customers.services';

@Module({
  controllers: [CustomerController],
  providers: [CustomersService],
})
export class CustomersModule {}
