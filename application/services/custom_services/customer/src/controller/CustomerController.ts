import { Request, Response } from 'express';
import { CustomerService } from '../service/CustomerService';
import { CustomLogger } from '../config/Logger'
let Customer = new CustomerService();

export class CustomerController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    Customer.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into CustomerController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from CustomerController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    Customer.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into CustomerController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from CustomerController.ts: Search');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    Customer.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into CustomerController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from CustomerController.ts: Update');
    })}
public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    Customer.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into CustomerController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from CustomerController.ts: GetEntityById');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    Customer.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into CustomerController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from CustomerController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    Customer.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into CustomerController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from CustomerController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    Customer.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into CustomerController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from CustomerController.ts: GetNounCreatedBy');
    })}


}