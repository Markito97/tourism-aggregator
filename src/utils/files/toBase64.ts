export const toBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
  });
};
