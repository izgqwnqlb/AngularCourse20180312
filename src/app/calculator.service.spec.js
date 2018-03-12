"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_service_1 = require("./calculator.service");
describe("calculator.service", function () {
    it("should calculate the sum of two numbers", function () {
        var calc;
        calc = new calculator_service_1.CalculatorService();
        var testCase = calc.sum(5, 6);
        expect(testCase).toBe(11);
    });
});
//# sourceMappingURL=calculator.service.spec.js.map