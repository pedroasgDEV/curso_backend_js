var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Eu = /** @class */ (function () {
    function Eu() {
        this.nome = "Pedro";
        this.idade = 22;
    }
    Eu.prototype.getNome = function () {
        return this.nome;
    };
    Eu.prototype.getIdade = function () {
        return this.idade;
    };
    return Eu;
}());
var MostraEu = /** @class */ (function (_super) {
    __extends(MostraEu, _super);
    function MostraEu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MostraEu.prototype, "mostraEu", {
        get: function () {
            return "Meu nome \u00E9 ".concat(this.getNome(), " e minha idade \u00E9 ").concat(this.getIdade());
        },
        enumerable: false,
        configurable: true
    });
    return MostraEu;
}(Eu));
var eu = new MostraEu();
console.log(eu.mostraEu);
