import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Mongoose } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  fullName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  age: number;

  @Prop({ default: null })
  education: string;

  @Prop({ default: null })
  college: string;

  @Prop({ default: null })
  work: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
