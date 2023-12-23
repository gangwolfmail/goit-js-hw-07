const menuItems = document.querySelectorAll(".item");
// console.log(menuItems);
console.log(`Number of categories: ${menuItems.length}`);
menuItems.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Element: ${item.querySelectorAll("li").length}`);
});
