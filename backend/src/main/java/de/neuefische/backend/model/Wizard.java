package de.neuefische.backend.model;
import java.util.Objects;


public class Wizard {
    private String id;
    private String name;
    private String gender;
    private String attribute1;
    private String attribute2;
    private String attribute3;


    public Wizard(String id, String name, String gender, String attribute1, String attribute2, String attribute3) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.attribute1 = attribute1;
        this.attribute2 = attribute2;
        this.attribute3 = attribute3;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAttribute1() {
        return attribute1;
    }

    public void setAttribute1(String attribute1) {
        this.attribute1 = attribute1;
    }

    public String getAttribute2() {
        return attribute2;
    }

    public void setAttribute2(String attribute2) {
        this.attribute2 = attribute2;
    }

    public String getAttribute3() {
        return attribute3;
    }

    public void setAttribute3(String attribute3) {
        this.attribute3 = attribute3;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Wizard wizard = (Wizard) o;
        return Objects.equals(id, wizard.id) && Objects.equals(name, wizard.name) && Objects.equals(gender, wizard.gender) && Objects.equals(attribute1, wizard.attribute1) && Objects.equals(attribute2, wizard.attribute2) && Objects.equals(attribute3, wizard.attribute3);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, gender, attribute1, attribute2, attribute3);
    }

    @Override
    public String toString() {
        return "Wizard{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", gender='" + gender + '\'' +
                ", attribute1='" + attribute1 + '\'' +
                ", attribute2='" + attribute2 + '\'' +
                ", attribute3='" + attribute3 + '\'' +
                '}';
    }
}
