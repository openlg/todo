import {Entity, model, property} from '@loopback/repository';

@model()
export class Geo extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'geopoint',
  })
  coor?: string;

  constructor(data?: Partial<Geo>) {
    super(data);
  }
}
