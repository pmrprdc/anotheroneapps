
const buttonsdata1 = []
const buttonsdata2 = []


for(let i=0; i<10; i++){

    buttonsdata1.push(
        {
            name: `${i*10} to ${(i*10)+9}`,
            value: i*10,
            key:i
        }
    )
    buttonsdata2.push({
        name: i,
        value: i,
        key: i

    })



}

export {buttonsdata1, buttonsdata2}