// Exercise 1 Destructuring a discriminated union
import { Equal, Expect } from "@total-typescript/exercise-cli";
import {expect, it} from "vitest"

type circle =
{
    kind: 'circle'
    radius: number
  }
  
type square={
    kind: 'square'
    sideLength: number
  }
  
type Shape = circle | square
  
function calculateArea(shape: Shape) {
    
  if (shape.kind === 'circle') {
    const { radius } = shape;
        return Math.PI * radius * radius
        
  } else {
    const { sideLength } = shape;
        return sideLength * sideLength
      }
}
    

// Exercise 2 Narrowing a discriminated union with a switch statement
function calculateArea2(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius * shape.radius;
    case 'square':
      return shape.sideLength * shape.sideLength;
  }
}
  
// Exercise 3 Discriminated Tuples
type User = {
    name: string
    email: string
  }
type APIResponse = ['success', User] | ['error', string]
async function fetchData(): Promise<APIResponse> {
  try {
    const response = await fetch('https://api.example.com/data')

    if (!response.ok) {
      return [
        'error',
        // Imagine some improved error handling here
        'An error occurred',
      ]
    }

    const data = await response.json()

    return ['success', data]
  } catch (error) {
    return ['error', 'An error occurred']
  }
}
async function exampleFunc() {
  const [status, value] = await fetchData()

  if (status === 'success') {
    console.log(value)

    type test = Expect<Equal<typeof value, User[]>>

  } else {
    console.error(value)

    type test = Expect<Equal<typeof value, string>>

  }
}

// Exercise 4 Handling default with a discriminated union
type circle2 =
{
    kind?: 'circle'
    radius2: number
  }
  
type square2={
    kind: 'square'
    sideLength2: number
  }
  
type Shape2 = circle2 | square2

function calculateArea3(shape2: Shape2) {
  if (shape2.kind === 'square') {
    return shape2.sideLength2 * shape2.sideLength2
  } else {
    return Math.PI * shape2.radius2 * shape2.radius2
  }
}

it('Should calculate the area of a circle when no kind is passed', () => {
  const result = calculateArea3({
    radius2: 5,
  })

  expect(result).toBe(78.53981633974483)

  type test = Expect<Equal<typeof result, number>>
})

//