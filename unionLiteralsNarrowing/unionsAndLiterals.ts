import { Equal, Expect } from '@total-typescript/exercise-cli';
// Exercise 1 string or null
function getUsername(username: string | null) {
    if (username !== null) {
      return `User: ${username}`
    } else {
      return 'Guest'
    }
}
const result = getUsername('Alice')

type test = Expect<Equal<typeof result, string>>

const result2 = getUsername(null)

type test2 = Expect<Equal<typeof result2, string>>


// Exercise 2 restricting function parameters
function move(direction: 'up'| 'down'| 'left'|'right', distance: number) {
    // Move the specified distance in the given direction
}
move('up', 10)

move('left', 5)

move(
    
  //Unused '@ts-expect-error' directive.
    'up-right',
    10,
  )
  
  move(
   
  //Unused '@ts-expect-error' directive.
    'down-left',
    20,
  )