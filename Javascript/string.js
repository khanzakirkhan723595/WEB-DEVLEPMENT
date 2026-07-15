const name="Zakir Ahmad";
console.log(name.toUpperCase()); 
console.log(name.toLowerCase()); 
console.log(name.trim()); //deletes extra space from beginnign and end
console.log(name.includes("Ahmad")); //it check weather substring present or not ,if present give true
console.log(name.startsWith("Zakir")); //check weather it start with this substring or not
console.log(name.endsWith("Ahmad"));
console.log(name.slice(0,4)); //it extracts the  substring inclusing index 0 but not including 4 
console.log(name.replace("Ahmad","Khan"));//replace string with new one

const skills = "HTML,CSS,Javascript";
console.log(skills.split(","));


