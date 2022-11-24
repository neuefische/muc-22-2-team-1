package de.neuefische.backend;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class TodoServiceTest {

    private final TodoService todoService = new TodoService();

    @Test
    void helloWorld() {
        //GIVEN

        //WHEN
        String result = todoService.helloWorld();

        //THEN
        assertEquals("Hello world", result);
    }
}
