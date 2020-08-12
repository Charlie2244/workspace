var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Math = /** @class */ (function () {
    function Math() {
    }
    Math.prototype.add = function (a, b) {
        return a + b;
    };
    __decorate([
        log
    ], Math.prototype, "add");
    return Math;
}());
function log(target, name, descriptor) {
    var oldValue = descriptor.value;
    descriptor.value = function () {
        console.log("Calling " + name + " with", arguments);
        return oldValue.apply(this, arguments);
    };
    return descriptor;
}
var math = new Math();
// passed parameters should get logged now
math.add(2, 4);
