import { ApiProperty } from "@nestjs/swagger";

export class ResetPasswordRequest {
    @ApiProperty()
    email: string;
}