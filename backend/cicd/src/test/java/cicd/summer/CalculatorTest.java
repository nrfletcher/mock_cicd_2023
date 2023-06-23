package cicd.summer;

import cicd.summer.calc.CalculatorClass;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {

    CalculatorClass calculatorClass;

    @BeforeEach
    void setUp() {
        calculatorClass = new CalculatorClass();
    }

    @Test
    @DisplayName("Addition function")
    void addTest() {
        assertEquals(15, calculatorClass.addition(10, 5));
    }

    @Test
    @DisplayName("Fail on purpose")
    void failOnPurpose() {
        assertEquals(10, calculatorClass.subtract(10, 10), "Failed");
    }

    @RepeatedTest(5)
    @DisplayName("Correct zero handling")
    void testDivision() {
        assertEquals(-1, calculatorClass.divide(5, 0));
        assertEquals(5, calculatorClass.divide(25, 5));
    }
}
