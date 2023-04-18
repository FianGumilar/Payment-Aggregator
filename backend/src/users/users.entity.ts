import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import common from '../common/entity.mix'
// import { Exclude } from "class-transformer";


@Entity()
export class User {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @ApiProperty()
    @Column(common.varcharNullable)
    name: string;

    @ApiProperty()
    @Column(common.varcharNullable)
    bussiness_name: string;

    @ApiProperty()
    @Column(common.varcharNullable)
    email: string;

    @ApiProperty()
    // @Exclude()
    @Column(common.varcharNullable)
    password: string;

    @ApiProperty()
    @Column(common.varcharNullable)
    phone: number;

    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn()
    updatedAt: Date;
}