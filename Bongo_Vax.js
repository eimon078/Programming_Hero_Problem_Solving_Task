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
    return output;
}

// console.log(vaxTrail(userInfo));