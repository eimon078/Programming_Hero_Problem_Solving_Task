const userInfo = [
    { name: "sunil", age: 21, temperature: 98 },
    { name: "Biplap", age: 22, temperature: 98 },
    { name: "Kabir", age: 36, temperature: 99 },
    { name: "Rahul", age: 37, temperature: 99 },
    { name: "Kat", age: 41, temperature: 98 },
    { name: "Paul", age: 42, temperature: 98 },
    { name: "Nayem", age: 50, temperature: 100 },
    { name: "Sabnaj", age: 51, temperature: 101 },
]

function vaxTrail(userData) {
    const output = userData.reduce((acc, curr) => {
        if (curr.temperature >= 100) {
            acc.D.push(curr);
        }
        else if (curr.age >= 20 && curr.age <= 30 && curr.temperature < 100) {
            acc.A.push(curr)
        }
        else if (curr.age >= 31 && curr.age <= 40 && curr.temperature < 100) {
            acc.B.push(curr)
        }
        else if (curr.age >= 41 && curr.age <= 50 && curr.temperature < 100) {
            acc.C.push(curr)
        }
        return acc;
    }, { A: [], B: [], C: [], D: [] })

    output.A = output.A.sort((a, b) => a.age % 2 - b.age % 2 || a.age - b.age)
    output.B = output.B.sort((a, b) => a.age % 2 - b.age % 2 || a.age - b.age)
    output.C = output.C.sort((a, b) => a.age % 2 - b.age % 2 || a.age - b.age)
    output.D = output.D.sort((a, b) => a.age % 2 - b.age % 2 || a.age - b.age)
    console.log(output.A);

    return output;
}

console.log(vaxTrail(userInfo));