import { Schema,  model } from "mongoose";

const linkSchema = new Schema({
  target: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default:0
  },
  user:{
  type: Schema.Types.ObjectId,
  ref : "User",
  required : true
  }
},
{
    timestamps:true
});

const Link = model('Link', linkSchema);
export default Link
