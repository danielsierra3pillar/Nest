import { IsString } from "class-validator"

// LOS DTO SIEMPRE SON CLASES
// cuando se hagan validaciones de data es mejor
// usar una clase, con una interfaz no es posible

export class CreateCarDto {
@IsString()
readonly brand: string

@IsString()
readonly model: string

}