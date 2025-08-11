import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { usuario } from './entities/customers.entity';
import { CustomersService } from './customers.services';

@Module({
  controllers: [CustomerController],
  providers: [CustomersService],
})
export class CustomersModule {}
