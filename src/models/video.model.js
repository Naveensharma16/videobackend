import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: Stirng, // cloudnary url
      required: true,
    },
    thumbnail: {
      type: Stirng, // cloudnary url
      required: true,
    },
    title: {
      type: Stirng,
      required: true,
    },
    description: {
      type: Stirng,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
