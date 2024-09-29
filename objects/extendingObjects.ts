//Create an intersection type
type BaseEntity = {
    id: string;
    createdAt: Date;
}
type User = {
    name: string;
    email: string;
  }& BaseEntity;
  
  type Product = {
    name: string;
    price: number;
}& BaseEntity;
  
//Extending interfaces
interface BaseEntity2 {
    id: string;
    createdAt: Date;
  }
  
  interface User2 extends BaseEntity2 {
    name: string;
    email: string;
  }
  
  interface Product2 extends BaseEntity2 {
    name: string;
    price: number;
  }
