function promisetimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(reject, ms);
    });
}
promisetimeout(3000).then(() => {
    console.log('done!!');
    return promisetimeout(1000 * 5);
}).then(() => {
    console.log('also done');
}).catch(() => {
    console.log('error');
})