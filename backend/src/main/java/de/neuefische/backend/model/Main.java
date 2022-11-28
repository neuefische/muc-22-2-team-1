package de.neuefische.backend.model;

import java.sql.SQLOutput;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Datenstruktur Map

        Map<String, Wizard> wizardMap = new HashMap<>();
        Wizard wizard1 = new Wizard("12", "Juan", "m", "cc", "c", "c");
        Wizard wizard2 = new Wizard("13", "Martin", "m", "aa", "a", "a");
        Wizard wizard3 = new Wizard("14", "Daniel", "m", "bb", "b", "b");
        Wizard wizard4 = new Wizard("14", "Daniel", "m", "bb", "b", "b");

        wizardMap.put("Harry", wizard1);

        System.out.println(wizardMap);


        Set<Wizard> wizardStudentsSet =  new HashSet<>(List.of(wizard1,wizard2,wizard3, wizard4));
        System.out.println(wizardStudentsSet);
    }
}
