import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Geo} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GeoRepository extends DefaultCrudRepository<
  Geo,
  typeof Geo.prototype.id
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Geo, dataSource);
  }
}
