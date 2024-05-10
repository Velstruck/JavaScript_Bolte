const myObject = {
    js: 'Javascrpit',
    cpp: 'C++',
    rb: 'Ruby',
    Swift: 'Swift by Apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for $ ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "c++", "java"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

for (const key in map) {
    // console.log(key);
}
// Maps are not iteratable

