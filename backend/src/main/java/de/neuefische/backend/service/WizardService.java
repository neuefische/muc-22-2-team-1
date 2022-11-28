package de.neuefische.backend.service;


import de.neuefische.backend.model.Wizard;
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
        return wizardRepo.getWizards();
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
        return wizardRepo.add(wizardWithId);
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
}
