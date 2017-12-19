function drawTree(x) {
    var star,
        spaceBarKey;
    for (var i = 1; i <= x; i++) {
        star = '';
        spaceBarKey = '';
        for (var k = i; k < x; k++) {
            spaceBarKey += ' ';
        }
        for (var j = 1; j < 2 * i; j++ ) {
            star += '*';
        }
    console.log(spaceBarKey + star);
    }
}
drawTree(8);