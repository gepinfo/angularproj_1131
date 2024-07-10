import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CustomerService } from './customer.service';


describe('customerService', () => {
  let service: CustomerService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('sharedServiceMock', ['methodName1', 'methodName2']);


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ CustomerService, { provide: sharedServiceMock, useValue: sharedServiceMock } ]
    });
    sharedServiceMock = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });


  
  // get all Values
  it('should retrieve all values getallCustomer from the server', () => {
    const mockResponse = { data: [{
      _id:'id2', 
      Enter_Name: 'Enter_Name 1',
    }]};
    const jwtToken = '123Hsdf_23234fdsjk';
    const expectedUrl = `${service.BaseURL}/Customer`;

    sessionStorage.setItem('JwtToken', jwtToken);

    service.GetAllCustomerValues().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
  
  // test case gp create
  it('should send a POST request to the server', () => {
    const Customer = { 
      Enter_Name: 'Enter_Name 1',
    };

    
    // Make the API call
    service.PostAllCustomerValues(Customer).subscribe(response => {
      expect(response).toEqual(Customer)
    });

    // Expect a POST request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/Customer`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(Customer);

    // Flush the mocked response
    req.flush(Customer);
  });
   
  // gp update the test case
  it('should send a PUT request to the server', () => {
    const Customer = { 
      id: '12dsadsa',
      Enter_Name: 'Enter_Name 1',
    };
    
    // Make the API call
    service.UpdateCustomer(Customer).subscribe(response => {
      expect(response).toEqual(Customer);
    });

    // Expect a PUT request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/Customer`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(Customer);

    // Flush the mocked response
    req.flush(Customer);
  });
   
  // delete the Customer 
  it('should send a DELETE request to the correct URL with the specified data ID', () => {
    const dataId = 123;

    // Make the request
    service.DeleteCustomerValues(dataId).subscribe();

    // Verify that the DELETE request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/Customer/${dataId}`);
    expect(req.request.method).toBe('DELETE');


    // Flush the mocked response
    req.flush(null);
  });
   






  it('should send a GET request to the correct URL with the specified Customer ID', () => {
    const CustomerId = 123;
    const mockResponse = { 
      id: CustomerId, 
      Enter_Name: 'Enter_Name 1',
    };

    // Make the request
    service.GetEntityById(CustomerId).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/Customerid/`+CustomerId);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });


  // get specificationCustomer
  it('should send a GET request to the correct URL with the specified ID', () => {
    const id = 123;

    // Make the request
    service.getSpecificCustomer(id).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/Customer/${id}`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  // get getSpecificCustomerHistory
  it('should send a GET request to the correct URL getSpecificCustomerHistory with the specified ID', () => {
    const dataId = 123;

    // Make the request
    service.getSpecificCustomerHistory(dataId).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/Customer/${dataId}/history?days=30`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  //search application
  it('should send a GET request to the correct URL with the specified data', () => {
    const data = { key1: 'value1', key2: 'value2' };
    const jwtToken = '123Hsdf_23234fdsjk';
    const mockResponse = { Customer: [] };

    // Set the mocked jwt token
    sessionStorage.setItem('JwtToken', jwtToken);

    // Make the request
    service.SearchCustomer(data).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/Customer/get/search?jwt_token=${jwtToken}&key1=value1&key2=value2`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });

  
});
