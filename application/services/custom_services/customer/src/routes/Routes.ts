import { Request, Response, NextFunction } from "express";
import { CustomerController } from '../controller/CustomerController';


export class Routes {
    private Customer: CustomerController = new CustomerController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/Customer/:id').delete(this.Customer.Delete);
app.route('/Customer/get/search').get(this.Customer.Search);
app.route('/Customer').put(this.Customer.Update);
app.route('/Customer/:id').get(this.Customer.GetEntityById);
app.route('/Customer').get(this.Customer.GetAllValues);
app.route('/Customer').post(this.Customer.Create);
app.route('/Customer/userid/created_by').get(this.Customer.GetNounCreatedBy);
     }

}