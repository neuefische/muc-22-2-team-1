package de.neuefische.backend.model;
import lombok.With;
import org.springframework.data.annotation.Id;

import java.util.Objects;

@With
public record Wizard(
        @Id
        String id,
         String name,
         String gender,
         String attribute1,
         String attribute2,
         String attribute3) {



    public Wizard(String id, String name, String gender, String attribute1, String attribute2, String attribute3) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.attribute1 = attribute1;
        this.attribute2 = attribute2;
        this.attribute3 = attribute3;
    }

}
