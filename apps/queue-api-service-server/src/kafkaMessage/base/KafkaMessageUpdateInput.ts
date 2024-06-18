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
import { EnumKafkaMessageKafkaStatus } from "./EnumKafkaMessageKafkaStatus";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumKafkaMessageStatus } from "./EnumKafkaMessageStatus";

@InputType()
class KafkaMessageUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumKafkaMessageKafkaStatus,
  })
  @IsEnum(EnumKafkaMessageKafkaStatus)
  @IsOptional()
  @Field(() => EnumKafkaMessageKafkaStatus, {
    nullable: true,
  })
  kafkaStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  messagePayload?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  payload?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  relatedQueueItem?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumKafkaMessageStatus,
  })
  @IsEnum(EnumKafkaMessageStatus)
  @IsOptional()
  @Field(() => EnumKafkaMessageStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { KafkaMessageUpdateInput as KafkaMessageUpdateInput };
