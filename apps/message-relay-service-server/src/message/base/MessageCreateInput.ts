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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { LogCreateNestedManyWithoutMessagesInput } from "./LogCreateNestedManyWithoutMessagesInput";
import { Type } from "class-transformer";

@InputType()
class MessageCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => LogCreateNestedManyWithoutMessagesInput,
  })
  @ValidateNested()
  @Type(() => LogCreateNestedManyWithoutMessagesInput)
  @IsOptional()
  @Field(() => LogCreateNestedManyWithoutMessagesInput, {
    nullable: true,
  })
  logs?: LogCreateNestedManyWithoutMessagesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  recipient?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sender?: string | null;
}

export { MessageCreateInput as MessageCreateInput };
