//object literal types
  const concatName = (user: { first: string; last: string }) => {
    return `${user.first} ${user.last}`;
  };
//optional property types
const concatName2 = (user: { first: string; last?: string }) => {
    return `${user.first} ${user.last}`;
  };