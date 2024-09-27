import { expect, Expect, Equal } from "@total-typescript/exercise-cli"
import { it } from "vitest"
import { test } from '@types/jest'

// Exercise 1 Narrowing a union with if statements
function validateUsername(username: string | null): boolean {
    if (typeof username === 'string') {
        return username.length > 5
  
    }else
    return false
}
it('should return true for valid usernames', () => {
    expect(validateUsername('Matt1234')).toBe(true)
  
    expect(validateUsername('Alice')).toBe(false)
  
    expect(validateUsername('Bob')).toBe(false)
})
  
it('Should return false for null', () => {
    expect(validateUsername(null)).toBe(false)
})
  
// Exercise 2 throwing errors to narrow
const appElement = document.getElementById('app')
if (appElement === null) {
    throw new Error('Element not found')
}
type Test = Expect<Equal<typeof appElement, HTMLElement>>

// Exercise 3 using in to narrow
type APIResponse =
  | {
      data: {
        id: string
      }
    }
  | {
      error: string
    }

const handleResponse = (response: APIResponse) => {
  // How do we check if 'data' is in the response?

  if ('data' in response) {
    return response;
  } else {
    throw new Error(response.error)
  }
}

test('passes the test even with the error', () => {
    // there is no error in runtime
  
    expect(() =>
      HandleResponseOrThrowError({
        error: 'Invalid argument',
      }),
    ).not.toThrowError()
  
    // but the data is returned, instead of an error.
  
    expect(
      HandleResponseOrThrowError({
        error: 'Invalid argument',
      }),
    ).toEqual("Should this be 'Error'?")
})
  
function HandleResponseOrThrowError(arg0: { error: string }) {
  throw new Error("Function not implemented.")
}

