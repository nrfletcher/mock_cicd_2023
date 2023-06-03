package cicd.summer.controller;

import cicd.summer.exception.ResourceNotFoundException;
import cicd.summer.model.Car;
import cicd.summer.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*
 *   Either leave this as "*" or go into VSCode settings and alter
 *   json.settings to user localhost instead of 127.0.0.1
 *   @CrossOrigin allows us to use the same domain for fetching API data which is typically prohibited by CORS
 *   @RestController allows us to handle client requests
 *   @RequestMapping sets our root route (http://localhost:8080/carapp)
 *   @Get, Post, Put, Delete are the different HTTP requests we want to be able to make from our API
 *
 */

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/carapp")
public class CarController {

    @Autowired
    private CarRepository carRepository;

    @GetMapping("/cars")
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    @PostMapping("/cars")
    public Car createCar(@RequestBody Car car) {
        return carRepository.save(car);
    }

    @GetMapping("/cars/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable Long id) {
        Car car = carRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Car doesn't exist"));
        return ResponseEntity.ok(car);
    }

    @GetMapping("/cars/make/{make}")
    public List<Car> getCarsByMake(@PathVariable String make) {
        List<Car> allCars = carRepository.findAll();
        List<Car> carsOfSameMake = new ArrayList<>();
        for(Car car : allCars) {
            if(car.getCarMake().equals(make)) {
                carsOfSameMake.add(car);
            } else {
                continue;
            }
        }
        return carsOfSameMake;
    }

    @PutMapping("/cars/{id}")
    public ResponseEntity<Car> updateCar(@PathVariable Long id, @RequestBody Car carInformation) {
        Car car = carRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Car not found"));

        car.setCarMake(carInformation.getCarMake());
        car.setCarModel(carInformation.getCarModel());
        car.setHorsePower(carInformation.getHorsePower());
        car.setMsrp(carInformation.getMsrp());

        Car updatedCarInformation = carRepository.save(car);
        return ResponseEntity.ok(updatedCarInformation);
    }

    @DeleteMapping("/cars/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCar(@PathVariable Long id) {
        Car car = carRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Car not found"));

        carRepository.delete(car);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}