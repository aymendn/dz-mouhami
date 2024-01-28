const fixLawyerImage = (imageUrl) => {
  // /media/https%3A/avocatalgerien.com/wp-content/uploads/2014/12/Benbattouche-230x230.jpg
  // if the image contains the word "avocatalgerien" then remove the part: /media/
  // and replace the first "%3A" with "/:"
  if (imageUrl.includes("avocatalgerien")) {
    return imageUrl.split("/media/")[1].replace("%3A", ":/");
  }

  // else, it will be in the form: /media/imagepath.jpg, then add the base url
  const baseUrl = "http://127.0.0.1";
  return baseUrl + imageUrl;
};

export default fixLawyerImage;
