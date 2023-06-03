package cicd.summer.repository;

import cicd.summer.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
 *   Create an interface utilizing the Spring JPA to access, manage, and persist data we have between
 *   our objects (model) and our relational database (Postgres in this example)
 *   Our object type in this case is Car, and we are using a Long to represent car ids
 *
 */

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
}