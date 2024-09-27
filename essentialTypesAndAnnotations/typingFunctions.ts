//import {Expect,Equal} from
//Exercise 1: Optional Function Parameters
const concatNamess = (first: string, last?: string) => {
    if (!last) {
      return first;
    }
  
    return `${first} ${last}`;
};
const result = concatNamess("John", "Doe");


//Exercise 2: Default Function Parameters
const concatName = (first: string, last= "Kanana") => {
    if (!last) {
      return first;
    }
  
    return `${first} ${last}`;

};
  
//Exercise 3 Rest parameters
export function concatenate(...strings: string[]) {
   
      return strings.join("");
}

//Exercise 4 Function Types
type User = {
    id: string;
    name: string;
  };
  
  const modifyUser = (user: User[], id: string, makeChange:(user: User) => User) => {
 
    return user.map((u) => {
      if (u.id === id) {
        return makeChange(u);
      }
  
      return u;
    });
};
  
const users: User[] = [
    { id: "1", name: "John" },
    { id: "2", name: "Jane" },
  ];
  
  modifyUser(users, "1", (user) => {
 
    return { ...user, name: "Waqas" };
  });

//Exercise 5 Functions returning void
const addClickEventListener = (listener :()=> void) => {
      document.addEventListener("click", listener);
    };
    
    addClickEventListener(() => {
      console.log("Clicked!");
    });

//Exercise 6 void vs undefined
const acceptsCallback = (callback: () => void) => {
    callback();
};
const returnString = () => {
    return "Hello!";
  };
  
acceptsCallback(returnString);
  
//Exercise 7 Typing Async functions
async function fetchData(): Promise<number> {
    const response = await fetch("https://api.example.com/data");
  
    const data = await response.json();
  
    return data;
}
const example = async () => {
    const data = await fetchData();
  
    //type test = Expect<Equal<typeof data, number>>;
  };