import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { User } from 'src/user/schema/user.schema';
@Schema()
export class Blog extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  //reference of the user id of the post who posted it
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  postedBy: User;

  //reference of the comments that the post holds
  // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  // comments: Comment;

  // @Prop()
  // likeCount: number;

  // reference of the likes the post holds
  // @Prop({ type: [{ type: Types.ObjectId, ref: 'Like' }] })
  // likes: Types.ObjectId[];
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
