let spins = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let r = 100;
for (let i of spins) {
    setTimeout(() =>{
        process.stdout.write(i);
    }, r += 200);
};
