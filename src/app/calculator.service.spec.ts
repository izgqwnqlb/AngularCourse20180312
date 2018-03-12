import { CalculatorService } from "./calculator.service";


describe("calculator.service", function () {

    it("should calculate the sum of two numbers", function () {

        var calc: CalculatorService;
        calc = new CalculatorService();

        var testCase: number = calc.sum(5,6);

        expect(testCase).toBe(11);

    });


});