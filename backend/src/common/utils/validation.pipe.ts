import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import * as Joi from "joi";

@Injectable()
export class JoiValidationPipe implements PipeTransform {
    constructor(private readonly schema: Joi.Schema) {}

    async transform(value: any, { metatype }: ArgumentMetadata) {
        if(!metatype || !this.schema) {
            return value;
        }

        const { error } = this.schema.validate(value);
        if(error) {
            throw new BadRequestException('Validation Failed!', error.message)
        }
        return value;
    }
}
