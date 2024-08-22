import {
  IsDateString,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator'

export class TransactionRequest {
  @IsString()
  @MinLength(3, { message: 'Минимальная длина названия категории 3 символа' })
  categoryName: string

  @IsNumber()
  @IsPositive({
    message: 'Сумма не должна быть равна нулю или быть отрицательной',
  })
  amount: number

  @IsString()
  comment?: string

  @IsDateString()
  date: Date
}
