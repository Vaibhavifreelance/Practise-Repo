
const mySym = Symbol("key1")


const jsUser ={
    [mySym]: "mykey1",
    name: "vaibhavi",
    "full name": "vaibhavi tiwari",
    age: 16 ,
    location: "kanpur",
    email: "vaibhavi@google.com",
    isLoggendIn: true,
    lastLoginDays: ["monday", "sunday"]
}

console.log(jsUser.email)
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "vibhavi@github.com"
Object.freeze(jsUser)
jsUser.email = "vibhavi@microsoft.com"
console.log(jsUser);