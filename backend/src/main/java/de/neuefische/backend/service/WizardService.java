package de.neuefische.backend.service;


import de.neuefische.backend.model.*;
import de.neuefische.backend.repo.WizardRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class WizardService {

    private final WizardRepo wizardRepo;
    private final IdService idService;


    @Autowired
    public WizardService(WizardRepo wizardRepo, IdService idService) {
        this.wizardRepo = wizardRepo;
        this.idService = idService;
    }

    public List<Wizard> list() {
        return wizardRepo.findAll();
    }

    public Wizard findById(String id) throws IllegalAccessException {
        Optional<Wizard> optionalWizard = wizardRepo.findById(id);
        if (optionalWizard.isPresent()) {
            return optionalWizard.get();
        }
        throw new IllegalAccessException("Id not found");
    }


    public Wizard addWizard(Wizard wizard) {
        String id = idService.generateId();
        Wizard wizardWithId = wizard.withId(id);
        Wizard wizardWithHouse = wizardWithId.withChosenHouse(selectHouse(wizardWithId));
        return wizardRepo.save(wizardWithHouse);
    }

    public List<Wizard> search(String s) {
        List<Wizard> searchResultList = new ArrayList<>();
        for (Wizard wizard : list()) {
            if (wizard.name().contains(s)) {
                searchResultList.add(wizard);
            }
        }

        return searchResultList;
    }

    public void delete(String id) throws IllegalAccessException {
        Wizard wizard = findById(id);
        wizardRepo.delete(wizard);
    }

    public String selectHouse(Wizard wizard) {


        int[] houseScore = new int[4];


        if (wizard.attribute1().equals(Attribute1.BRAVE)
                || wizard.attribute2().equals(Attribute2.COURAGEOUS)
                || wizard.attribute3().equals(Attribute3.DETERMINED)) {
            houseScore[0]++;
        }
        if (wizard.attribute1().equals(Attribute1.JUST)
                || wizard.attribute2().equals(Attribute2.FAITHFUL)
                || wizard.attribute3().equals(Attribute3.DILIGENT)) {
            houseScore[1]++;
        }

        if (wizard.attribute1().equals(Attribute1.CLEVER)
                || wizard.attribute2().equals(Attribute2.CREATIVE)
                || wizard.attribute3().equals(Attribute3.INTROVERT)) {
            houseScore[2]++;
        }
        if (wizard.attribute1().equals(Attribute1.AMBITIOUS)
                || wizard.attribute2().equals(Attribute2.ASSERTIVE)
                || wizard.attribute3().equals(Attribute3.REBELLIOUS)) {
            houseScore[3]++;
        }
        int max = houseScore[0];
        int scoreIndex = 0;

        for (int i = 0; i < houseScore.length; i++) {
            if (max < houseScore[i]) {
                max = houseScore[i];
                scoreIndex = i;
            }

        }
        int maxScoreIndex = scoreIndex;

        String[] houses = {"GRYFFINDOR", "HUFFLEPUFF", "RAVENCLAW", "SLYTHERIN"};
        //test123 test123

        return houses[maxScoreIndex];

    }
}
