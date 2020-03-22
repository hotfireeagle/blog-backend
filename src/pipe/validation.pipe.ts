import { PipeTransform, Injectable, ArgumentMetadata, HttpException, HttpStatus } from '@nestjs/common'
import { validate } from 'class-validator'
import { plainToClass } from 'class-transformer'
import { ErrorStatus } from '../constant/response'

@Injectable()
export class ValidationPipe implements PipeTransform<any> {

  /**
   * 判断传给controller的数据是否需要经过校验
   * @param metaType : 数据类型，只有是class-validator修饰的才需要进行拦截检查
   */
  private pass(metaType: Function): boolean {
    const whiteList: Function[] = [String, Number, Boolean, Object, Array]
    return whiteList.includes(metaType)
  }

  /**
   * 返回错误列表数据
   * @param errors : 错误列表数据
   */
  private errorStringify(errors: any[]): string {
    const result = []
    errors.map(errObj => {
      const errDescObj = errObj.constraints
      Object.keys(errDescObj).map(key => {result.push(errDescObj[key])})
    })
    return result.join('-')
  }

  /**
   * transform是PipeTransform接口中定义的一个方法
   * @param value : 拦截的传给controller的值
   * @param param1 : 值的包装类
   */
  async transform(value: any, metadata: ArgumentMetadata) {
    const metaType = metadata.metatype
    if (!metaType || this.pass(metaType)) { // 无需校验的话，那么这个值原封不动的继续传给controller
      console.log('wdn')
      return value
    }
    const object = plainToClass(metaType, value)
    const errors = await validate(object)
    if (errors.length > 0) {
      const message = this.errorStringify(errors)
      throw new HttpException({ status: ErrorStatus, message }, HttpStatus.BAD_REQUEST)
    }
    return value
  }
}