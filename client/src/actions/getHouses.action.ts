export const handleGetHouses = async (): Promise<[]> => {
  try {
    const response = await fetch('http://localhost:3001/houses/allHouses', {
      method: 'GET',
    })
    return await response.json()
  } catch (err) {
    throw new Error()
  }
}
