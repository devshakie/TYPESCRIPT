//passing types to map
type User = {
    name: string;
    age: number;
};
  
const userMap = new Map<number, User>();

userMap.set(1, { name: "Max", age: 30 });

userMap.set(2, { name: "Manuel", age: 31 });

// @ts-expect-error
//Unused '@ts-expect-error' directive.
userMap.set("3", { name: "Anna", age: 29 });

// @ts-expect-error
//Unused '@ts-expect-error' directive.
userMap.set(3, "123");



//JSON.parse() can't recieve type arguments
const parsedData : {
      name: string;
      age: number,
} = JSON.parse('{"name": "Alice", "age": 30}');
