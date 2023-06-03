package cicd.summer.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

    /*
     *   Our REST API will define functions for CRUD operations, but sometimes a request not be found
     *   We use our ResourceNotFoundException to throw an error when our database query comes out bad
     *
     */

    private static final long serialVersionUID = 1L;

    public ResourceNotFoundException(String message) {
        super(message);
    }
}