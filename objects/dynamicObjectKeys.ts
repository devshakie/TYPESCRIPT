import {it, expect} from "@total-typescript/exercise-cli"
// Exercise 1 : use an index signature for dynamic keys
type scores= {
    [index: string]: number;
};
let scores: scores = {};
scores.math = 95;
scores.english = 90;
scores.science = 85;

//Exercise 2: default properties with dynamic keys
interface Scores {
[index: string]: number; 
math: number;
english: number;
science: number;
}
// @ts-expect-error science should be provided

const scoress: Scores = {
  math: 95,
    english: 90,

};

scores.athletics = 100;

scores.french = 75;

scores.spanish = 70;

//Exercise 3: Restricting object keys with records

type Environment = "development" | "production" | "staging";

type Configurations = Record<Environment, {apiBaseUrl: string, timeout: number}>;

const configurations: Configurations = {
  development: {
    apiBaseUrl: "http://localhost:8080",
    timeout: 5000,
  },
  production: {
    apiBaseUrl: "https://api.example.com",
    timeout: 10000,
  },
  staging: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  },
  // @ts-expect-error
//Unused '@ts-expect-error' directive.
  notAllowed: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  },
};

//Exercise 4:
const hasKey = (obj: object, key: PropertyKey) => {
    return obj.hasOwnProperty(key);
};
  
it("Should work on string keys", () => {
    const obj = {
      foo: "bar",
    };
  
    expect(hasKey(obj, "foo")).toBe(true);
    expect(hasKey(obj, "bar")).toBe(false);
});
  
it("Should work on number keys", () => {
    const obj = {
      1: "bar",
    };
  
    expect(hasKey(obj, 1)).toBe(true);
 
    expect(hasKey(obj, 2)).toBe(false);
  
});
it("Should work on symbol keys", () => {
    const fooSymbol = Symbol("foo");
    const barSymbol = Symbol("bar");
  
    const obj = {
      [fooSymbol]: "bar",
    };
  
    expect(hasKey(obj, fooSymbol)).toBe(true);
  
    expect(hasKey(obj, barSymbol)).toBe(false);
 
  });