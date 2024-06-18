/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QueueItemWhereInput } from "./QueueItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QueueItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QueueItemWhereInput,
  })
  @ValidateNested()
  @Type(() => QueueItemWhereInput)
  @IsOptional()
  @Field(() => QueueItemWhereInput, {
    nullable: true,
  })
  every?: QueueItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => QueueItemWhereInput,
  })
  @ValidateNested()
  @Type(() => QueueItemWhereInput)
  @IsOptional()
  @Field(() => QueueItemWhereInput, {
    nullable: true,
  })
  some?: QueueItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => QueueItemWhereInput,
  })
  @ValidateNested()
  @Type(() => QueueItemWhereInput)
  @IsOptional()
  @Field(() => QueueItemWhereInput, {
    nullable: true,
  })
  none?: QueueItemWhereInput;
}
export { QueueItemListRelationFilter as QueueItemListRelationFilter };