package cicd.summer.model;

import jakarta.persistence.*;

@Entity
@Table(name = "cars")
public class Car {

    /*
     *   @Entity will tell our project that this class is a persistent class, it is a domain model
     *   @Id will tell our project that this is a primary key, it will auto-increment in our Postgres database
     *   @GeneratedValue will tell our project to generate a key for us, starting at 1 and upwards
     *   @Column will tell our project this field is a column in our 'cars' table, within 'carapp' database
     *
     */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "make")
    private String carMake;

    @Column(name = "model")
    private String carModel;

    @Column(name = "horsepower")
    private int horsePower;

    @Column(name = "msrp")
    private int msrp;

    public Car() {

    }

    public Car(String carMake, String carModel, int horsePower, int msrp) {
        super();
        this.carMake = carMake;
        this.carModel = carModel;
        this.horsePower = horsePower;
        this.msrp = msrp;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCarMake() {
        return carMake;
    }

    public void setCarMake(String carMake) {
        this.carMake = carMake;
    }

    public String getCarModel() {
        return carModel;
    }

    public void setCarModel(String carModel) {
        this.carModel = carModel;
    }

    public int getHorsePower() {
        return horsePower;
    }

    public void setHorsePower(int horsePower) {
        this.horsePower = horsePower;
    }

    public int getMsrp() {
        return msrp;
    }

    public void setMsrp(int msrp) {
        this.msrp = msrp;
    }
}