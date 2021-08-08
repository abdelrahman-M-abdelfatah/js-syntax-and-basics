function promisetimeout(ms) {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(resolve, ms);
        } else if (false) {
            setTimeout(reject, ms);
        }

    });
}
async function simulatelongoperation() {
    let x = 0;
    await promisetimeout(3000)
        .then(() => {
            console.log('true');
            x = 42;
        }).catch(() => {
            x = 55;
        });
    return x;
}
async function run() {
    const answer = await simulatelongoperation();
    console.log(answer);
}
run();