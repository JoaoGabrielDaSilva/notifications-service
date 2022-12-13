import { Injectable } from '@nestjs/common'
import { Get } from '@nestjs/common/decorators'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }
}
