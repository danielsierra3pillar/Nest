import { Module } from '@nestjs/common';

import { BrandsModule } from './../brands/brands.module';
import { CarsModule } from './../cars/cars.module';

import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Module({
  controllers: [ SeedController ],
  providers: [ SeedService, CarsService, BrandsService ],
  imports: [ CarsModule, BrandsModule ]
})
export class SeedModule {}