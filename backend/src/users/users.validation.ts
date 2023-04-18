import { HttpException, HttpStatus } from "@nestjs/common";
import { loginValidationSchema } from "src/users/users.schema";
import { LoginUserDto } from "src/interfaces/login.user.dto";

export async function LoginValidation(data: LoginUserDto) {
    try {
        const result = loginValidationSchema.validate(data)
        if(result.error) {
            throw new HttpException('Validation Error', HttpStatus.FORBIDDEN)
        }
        return result.value;
    } catch (err) {
        throw new Error(err);
    }
}
