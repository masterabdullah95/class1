var person_name = "Abdullah Shoaib";
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
console.log(toTitleCase(person_name));
