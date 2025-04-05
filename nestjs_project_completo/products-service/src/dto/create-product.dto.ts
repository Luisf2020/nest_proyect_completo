import { IsNotEmpty, IsNumber, IsUUID, Min } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name!: string;

  @IsNumber()
  @Min(0)
  price!: number;

  @IsUUID()
  userId!: string;
}
