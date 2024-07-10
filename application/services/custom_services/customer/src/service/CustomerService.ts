import { Request, Response } from 'express';
import {CustomerDao} from '../dao/CustomerDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';















let Customer = new CustomerDao();

export class CustomerService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into CustomerService.ts: Delete')
     let  CustomerId = req.params.id;
     Customer.Delete(CustomerId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from CustomerService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into CustomerService.ts: Search')
     let  CustomerData = req.query;
     Customer.Search(CustomerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from CustomerService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into CustomerService.ts: Update')
     let  CustomerData = req.body;
     Customer.Update(CustomerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from CustomerService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into CustomerService.ts: GetEntityById')
     let  CustomerId = req.params.id;
     Customer.GetEntityById(CustomerId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from CustomerService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into CustomerService.ts: GetAllValues')
     
     Customer.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from CustomerService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into CustomerService.ts: Create')
     let  CustomerData = req.body;
     Customer.Create(CustomerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from CustomerService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into CustomerService.ts: GetNounCreatedBy')
     let  CustomerData = { created_by: req.query.createdby };
     Customer.GetNounCreatedBy(CustomerData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from CustomerService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}