const book = new Object({ title: "1984", auther: "george orwell" });
console.log("\n ------");
console.log(typeof book);
console.log(book);
const mybook = [new Object({ title: "1984", auther: "george" }),
    new Object({ title: "becoming", auther: "michelle" }),
    new Object({ title: "snow ", auther: "neal" })
];
console.log("\n -----");
console.log(typeof mybook);
console.log(mybook);
console.log("\n -------");
let bookjson = JSON.stringify(book);
let booksjson = JSON.stringify(mybook);
console.log(bookjson + "\n ----------\n" + booksjson);