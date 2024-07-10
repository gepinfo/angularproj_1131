
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const CustomerSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   Enter_Name: { type: String }
})

const CustomerModel = mongoose.model('Customer', CustomerSchema, 'Customer');
export default CustomerModel;
