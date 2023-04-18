import { ApiProperty } from "@nestjs/swagger";

export class RegisterUserDto {
    @ApiProperty()
    id?: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    bussiness_name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;   
    @ApiProperty()
    phone: number;
}