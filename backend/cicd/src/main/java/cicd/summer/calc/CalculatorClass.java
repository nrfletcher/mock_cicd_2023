package cicd.summer.calc;

public class CalculatorClass implements Calculator {

    @Override
    public int divide(int a, int b) {
        if(b == 0) return -1;
        return a/b;
    }

    @Override
    public int multiply(int a, int b) {
        return a*b;
    }

    @Override
    public int subtract(int a, int b) {
        return a - b;
    }

    @Override
    public int addition(int a, int b) {
        return a + b;
    }

    @Override
    public String binaryStringAdd(String a, String b) {
        // Implement
        return null;
    }
}
