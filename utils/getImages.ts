"use client";

export const getImagesFromLocal = (): Array<string> => {
  return JSON.parse(localStorage.getItem("image") as string) || [];
};

export const setImageInLocal = (imageURL: string) => {
  const allImages = getImagesFromLocal();
  localStorage.setItem("image", JSON.stringify([...allImages, imageURL]));
};
