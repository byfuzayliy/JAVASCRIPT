// console.log(location);
// console.log(location.search);

// let query = new URLSearchParams(location.search);

// console.log(query.get("page"));
// console.log(query.get("limit"));
// console.log(query.get("search"));

// console.log(query.has("firstName"));
// console.log(query.has("page"));

// let queryKeys = query.keys();

// for (key of queryKeys) {
//   console.log(key);
// }

// let queryValues = query.values();

// for (value of queryValues) {
//   console.log(value);
// }

// let entries = query.entries();

// for ([key, value] of entries) {
//   console.log(key, value);
// }

// query.append("modal", true);

// console.log(query);
// console.log(query.toString());

// function paramsToObject(query) {
//   const result = {};
//   for (const [key, value] of query) {
//     result[key] = value;
//   }
//   return result;
// }

// let obj = paramsToObject(query);

// console.log(obj);

const locationBtn = document.querySelector(".location");

locationBtn.addEventListener("click", () => {
  // location.assign("navigator.html");
  // location.href = "navigator.html";
  // location = "navigator.html";
  
  location.replace("navigator.html");
});
