// 1. Create variables named john and rest using the destructuring assignment
// 2. Assign the variables values from calling the map method on the students array
// 3. Within the map method either use an arrow function or provide a function created outside of the map method (note this function should also be an arrow function)
// 4. Log out the variable named: john to see its value
// 5. Log out the variable named: rest to see its value


let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

let[John, ...rest] = students.map(student => [student.name, student.results])

console.log(John)
console.log(...rest)