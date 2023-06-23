package cicd.summer;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class CicdApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	void thisTest() {
		assertEquals(1, returnOne());
	}

	int returnOne() {
		return 1;
	}
}
