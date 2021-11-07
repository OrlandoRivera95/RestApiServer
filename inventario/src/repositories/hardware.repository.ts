import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InventarioDataSource} from '../datasources';
import {Hardware, HardwareRelations} from '../models';

export class HardwareRepository extends DefaultCrudRepository<
  Hardware,
  typeof Hardware.prototype.id,
  HardwareRelations
> {
  constructor(
    @inject('datasources.inventario') dataSource: InventarioDataSource,
  ) {
    super(Hardware, dataSource);
  }
}
