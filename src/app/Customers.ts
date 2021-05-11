export class Customers
{
constructor() {}
  name:string;
  mobile:any;
  email:string;
  address:string;
  password:string;

  get Name():string
  {
      return this.name;
  }

  set Name(name:string)
  {
      this.name=name;
  }

  get Mobile():any
  {
      return this.mobile;
  }

  set Mobile(mobile:any)
  {
      this.mobile=mobile;
  }

  get Email():string
  {
      return this.email;
  }

  set Email(email:string)
  {
      this.email=email;
  }

  get Address():string
  {
      return this.address;
  }

  set Address(address:string)
  {
      this.address=address;
  }

  get Pass():string
  {
      return this.password;
  }

  set Pass(password:string)
  {
      this.password=password;
  }
}