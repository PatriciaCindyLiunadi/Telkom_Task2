const object = {
  author: "John Red Doe",
  title: "Mr.RED has a red and a green car",
  images: {
    url: "https://dummy.com/red-image.jpg",
  }
};

const replaceRedWithBlue = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      replaceRedWithBlue(obj[key]);
    } else if (typeof obj[key] === "string" && obj[key].includes("red")) {
      obj[key] = obj[key].replace(/red/gi, "blue");
    }
  }
  return obj;
}

replaceRedWithBlue(object);
console.log(object);
