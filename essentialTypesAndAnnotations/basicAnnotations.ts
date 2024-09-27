import { expect } from "@total-typescript/exercise-cli";
import{it} from "vitest";
//Basic Types with Function Parameters
export const add = (a: number, b: number) => {
    return a + b;
 
};
const result = add(1, 2);


//Annotating Empty Parameters
const concatTwoStrings = (a:string, b:string) => {

      return [a, b].join(" ");
};
const result2 = concatTwoStrings("Hello", "World");



//the basic types
export let example1: string = "Hello World!";
export let example2: number = 42;
export let example3: boolean= true;
export let example4: symbol = Symbol();
export let example5: bigint = 123n;

//the any type
const handleFormData = (e: any) => {
    e.preventDefault();
  
    const data = new FormData(e.terget); 
  
    const value = Object.fromEntries(data.entries());
  
    return value;
  };
  it("Should handle a form submit", () => {
    const form = document.createElement("form");
  
    form.innerHTML = `
  <input name="name" value="John Doe"></Exercise>
  `;
  
    form.onsubmit = (e) => {
      const value = handleFormData(e);
  
      expect(value).toEqual({ name: "John Doe" });
    };
  
    form.requestSubmit();
  
    expect.assertions(1);
  });

//the type keyword 
type Rectangle = {
    width: number;
    height: number;
};
  
const getRectangleArea = (rectangle: Rectangle) => {
    return rectangle.width * rectangle.height;
  };
  
  const getRectanglePerimeter = (rectangle: Rectangle) => {
    return 2 * (rectangle.width + rectangle.height);
};
  
console.log(getRectanglePerimeter);
console.log(getRectangleArea);


