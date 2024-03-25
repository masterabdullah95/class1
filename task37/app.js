var make_shirt = function (size, msg) {
    if (size === void 0) { size = 'lg'; }
    if (msg === void 0) { msg = 'I love TypeScript'; }
    if (size == 'lg' || size == 'md') {
        console.log("Size: ".concat(size, ", msg: ").concat(msg));
    }
    else {
        console.log("Size: ".concat(size, ", msg: this is different msg."));
    }
};
make_shirt('lg');
make_shirt('md');
make_shirt('sm');
