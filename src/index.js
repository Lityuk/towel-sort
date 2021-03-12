module.exports = function towelSort(matrix) {
    let arr = [];
    if (matrix == 0 || matrix == undefined) {
        return arr;
    } else {
        matrix.forEach((element, index) => {
            if (index % 2 != 0) {
                element.reverse();
            }
            for (let i = 0; i < element.length; i++) {
                arr.push(element[i]);
            }
        });
        // console.log(arr);
        return arr;
    }
};
