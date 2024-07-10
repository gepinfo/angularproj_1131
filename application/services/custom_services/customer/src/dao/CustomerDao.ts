import * as mongoose from 'mongoose';
import CustomerModel from '../models/daomodels/Customer';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class CustomerDao {
    private Customer = CustomerModel;

    

    constructor() { }
    
    public async Delete(CustomerId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into CustomerDao.ts: Delete');

    

    
    
    
    this.Customer.findByIdAndRemove(CustomerId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from CustomerDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(CustomerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into CustomerDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(CustomerData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.Customer.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from CustomerDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(CustomerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into CustomerDao.ts: Update');

    

    
    
    
    this.Customer.findOneAndUpdate({ _id: CustomerData._id }, CustomerData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from CustomerDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(CustomerId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into CustomerDao.ts: GetEntityById');

    

    
    
    
    this.Customer.findById(CustomerId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from CustomerDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into CustomerDao.ts: GetAllValues');

    

    
    
    
    this.Customer.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from CustomerDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(CustomerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into CustomerDao.ts: Create');

    let temp = new CustomerModel(CustomerData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from CustomerDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(CustomerData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into CustomerDao.ts: GetNounCreatedBy');

    

    
    
    
    this.Customer.aggregate(([
                        { $match: { $and: [{ created_by: CustomerData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from CustomerDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}