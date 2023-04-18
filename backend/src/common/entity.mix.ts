import { ColumnOptions, PrimaryColumnOptions } from "typeorm";

export default class EntityMix {
    static varcharNullable: ColumnOptions = {
        nullable: true,
        type: 'varchar',
        default: null,
    };
    static textNullable: ColumnOptions = {
        nullable: true,
        type: 'text',
        default: null,
    };
    static intNullable: ColumnOptions = {
        nullable: true,
        type: 'integer',
        default: null,
    };
    static charRequired100: PrimaryColumnOptions = {
        nullable: false,
        type: 'varchar',
        length: 100,
      };
      static charRequired256: ColumnOptions = {
        nullable: false,
        type: 'varchar',
        length: 256,
      };
}