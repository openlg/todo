import {Provider, inject, ValueOrPromise} from '@loopback/context';
import {Strategy} from 'passport';
import {
  AuthenticationBindings,
  AuthenticationMetadata,
  UserProfile
} from '@loopback/authentication';
import {BasicStrategy} from 'passport-http';

export class AuthBasicStrategyProvider implements Provider<Strategy | undefined>{
  constructor(
    @inject(AuthenticationBindings.METADATA)
    private metadata: AuthenticationMetadata,
  ) {

  }

  value(): ValueOrPromise<Strategy | undefined> {

    if( !this.metadata )
      return undefined;

    const name = this.metadata.strategy;

    if( name === 'BasicStrategy') {
      return new BasicStrategy(this.verify);
    } else {
      return Promise.reject(`The strategy ${name} is not available.`);
    }
  }

  verify(username: string, password: string, cb: (err: Error|null, user?:UserProfile|false)=> void,){

    if( username === 'admin' && password === 'admin')
      cb(null, {id: 'Kkfsl-Ekdfjk-Wldjfm', name: 'admin'});
    else
      cb(null, false);
  }

}