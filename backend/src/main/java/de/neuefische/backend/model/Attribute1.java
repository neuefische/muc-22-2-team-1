package de.neuefische.backend.model;


public enum Attribute1 {
    Brave("mutig"),
    Just("gerecht"),
    Clever("klug"),
    Ambitious("ehrgeizig");

    private final String name;

    private Attribute1(String name) {
        this.name = name;
    }
}
