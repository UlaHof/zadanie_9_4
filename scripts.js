function drawTree(x) {
    for (i = 1; i <= x; i++) {
        var star = '';
        for ( j = 1; j <= i; j++ ) {
            star += '*';
        }
        console.log(star);
    }
}
(drawTree(5));