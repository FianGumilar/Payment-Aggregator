import { ApiProperty } from "@nestjsx/crud/lib/crud";

export class RecoverDto {
    @ApiProperty()
    email: string;
}