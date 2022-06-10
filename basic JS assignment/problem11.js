   function asc(arr) {
    let map = new Map
    let c = 1;
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
        else {
            map.set(arr[i], c)
        }
    }
    let narr = [...map];
    let tmp;
    for (i = 0; i < narr.length; i++) {
        for (j = i + 1; j < narr.length; j++) {
            if (narr[i][1] > narr[j][1]) {
                tmp = narr[i];
                narr[i] = narr[j];
                narr[j] = tmp;
            }
            else if ((narr[i][1] = narr[j][1])) {
                if (narr[i][0] > narr[j][0]) {
                    tmp = narr[i];
                    narr[i] = narr[j];
                    narr[j] = tmp;
                }
            }
        }
    }
    return narr;
}
arr = [3, 8, 7, 4, 7, 3, 4];
console.log(asc(arr));