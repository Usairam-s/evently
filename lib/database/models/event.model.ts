import { Schema, model, models, Document } from "mongoose";

export interface IEvent extends Document {
  _id?: string; // Optional
  title: string;
  description?: string; // Optional
  location?: string; // Optional
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string; // Optional
  isFree: boolean;
  url?: string; // Optional
  category?: { _id?: string; name: string }; // Optional
  organizer?: { _id?: string; firstname?: string; lastname?: string }; // Optional
}

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  createdAt: {
    type: String,
    default: Date.now,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  startDateTime: {
    type: String,
    default: Date.now,
  },
  endDateTime: {
    type: String,
    default: Date.now,
  },
  price: {
    type: String,
  },
  isFree: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  organizer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
