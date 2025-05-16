self.addEventListener('message', (e) => {
    console.log(Date.now());
    const sum = (n: number) => {
        let result = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                result += i;
            }
        }
        return result;
    };

    self.postMessage(sum(e.data));
});
