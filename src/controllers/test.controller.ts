import {Request, RestBindings, get, ResponseObject} from '@loopback/rest';
import {inject} from '@loopback/context';



export class TestController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  @get('/test', {
    responses: {
      '200': {
        description: 'Ping Response',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                greeting: {type: 'string'},
                date: {type: 'string'},
                url: {type: 'string'},
                headers: {
                  type: 'object',
                  properties: {
                    'Content-Type': {type: 'string'},
                  },
                  additionalProperties: true,
                },
              },
            },
          },
        },
      },
    },
  })
  test():object {

    return {
      greeting: 'Hello from LoopBack',
      date: new Date(),
      url: this.req.url,
      headers: Object.assign({}, this.req.headers),
    }
  }
}
