import{Expect,Equal} from "@total-typescript/exercise-cli"
//Exercise 1: Expecting certain properties
interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}
type PickedUser = Pick<User, "name" | "email">;
  
  const fetchUser = async (): Promise<PickedUser> => {
    const response = await fetch("/api/user");
    const user = await response.json();
    return user;
  };
  
  const example = async () => {
    const user = await fetchUser();
  
    type test = Expect<Equal<typeof user, { name: string; email: string }>>;
};
  
//Exercise 2: updating a product
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  const updateProduct = (id: number, productInfo: Partial<Omit<Product,"id">>) => {
    // Do something with the productInfo
};
updateProduct(1, {
   
      name: "Book",
    });
    
    updateProduct(1, {
   
      price: 12.99,
    });