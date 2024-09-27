const somethingDangerous = () => {
    if (Math.random() > 0.5) {
      throw new Error('Something went wrong')
    }
  
    return 'all good'
  }
  
  try {
    somethingDangerous()
  } catch (error) {
    if (true) {
      console.error(error.message)
    }
  }