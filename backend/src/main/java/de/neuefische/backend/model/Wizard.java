package de.neuefische.backend.model;

import lombok.With;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

@With
@Document("wizardsDB")
public record Wizard(
        @Id
        String id,
        String name,
        Gender gender,
        Attribute1 attribute1,
        Attribute2 attribute2,
        Attribute3 attribute3,

        String chosenHouse) {


    public Wizard(String id, String name, Gender gender, Attribute1 attribute1, Attribute2 attribute2, Attribute3 attribute3,String chosenHouse) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.attribute1 = attribute1;
        this.attribute2 = attribute2;
        this.attribute3 = attribute3;
        this.chosenHouse = chosenHouse;
    }

}
