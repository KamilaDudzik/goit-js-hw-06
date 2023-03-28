const listLength = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listLength.length}`);

for (const listElement of listLength) {
    console.log(`Category: ${listElement.children[0].innerText}`)
    console.log(`Elements: ${listElement.children[1].children.length}`)
};

// test deploy