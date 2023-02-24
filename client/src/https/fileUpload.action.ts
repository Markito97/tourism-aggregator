export const fileUpload = async (files: any) => {
  const formData = new FormData()
  formData.append('files', files[0])
  // formData.append('house', JSON.stringify(house))
  const response = await fetch('http://localhost:3001/houses/createHouse', {
    method: 'POST',
    body: formData,
    // mode: 'no-cors',
  })
  return response
}
