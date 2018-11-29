import {Entity, model, property} from '@loopback/repository';

@model()
export class Order extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    description: '订单名称'
  })
  title: string;

  @property({
    type: 'string',
  })
  desc?: string;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}