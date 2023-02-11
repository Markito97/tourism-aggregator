export const fileUpload = async (house: any, file: any) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('house', JSON.stringify(house))
  const response = await fetch('http://localhost:3001/houses/createHouse', {
    method: 'POST',
    body: formData,
    mode: 'no-cors',
  })
  return response.json()
}
