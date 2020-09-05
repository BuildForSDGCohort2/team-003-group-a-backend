import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

const vacancySchema = mongoose.Schema({
  vacancyTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  datePosted: {
    type: String,
    default: new Date().toUTCString(),
  },
  status: {
    type: String,
    default: 'OPEN',
  },
  postedBy: {
    type: ObjectId,
    ref: 'User',
  },
});

export default mongoose.model('Vacancy', vacancySchema);
