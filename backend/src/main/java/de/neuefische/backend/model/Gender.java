package de.neuefische.backend.model;

public enum Gender {
    WITCHER("Zauberer"),
    WITCH("Hexe"),
    DIVERS("Divers");

    private final String name;

    private Gender(String name) {
        this.name = name;
    }
}
