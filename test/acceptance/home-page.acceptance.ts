// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: @loopback/example-shopping
// This config.json is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Client} from '@loopback/testlab';
import {TodoApplication} from '../..';
import {setupApplication} from './test-helper';

describe('HomePage', () => {
  let app: TodoApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('exposes a default home page', async () => {
    await client
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/);
  });
});
