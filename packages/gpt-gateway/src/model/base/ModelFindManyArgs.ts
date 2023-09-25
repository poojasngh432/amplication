/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ModelWhereInput } from "./ModelWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ModelOrderByInput } from "./ModelOrderByInput";

@ArgsType()
class ModelFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ModelWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ModelWhereInput, { nullable: true })
  @Type(() => ModelWhereInput)
  where?: ModelWhereInput;

  @ApiProperty({
    required: false,
    type: [ModelOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ModelOrderByInput], { nullable: true })
  @Type(() => ModelOrderByInput)
  orderBy?: Array<ModelOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ModelFindManyArgs as ModelFindManyArgs };