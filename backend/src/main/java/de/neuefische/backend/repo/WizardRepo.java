package de.neuefische.backend.repo;

import de.neuefische.backend.model.Wizard;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class WizardRepo {



    private List<Wizard>wizards = new ArrayList<>();




    public Wizard add(Wizard wizard){
        wizards.add(wizard);
        return wizard;
    }

    public Optional<Wizard> findById(String id){
        for (Wizard wizard: wizards){
            if (wizard.id().equals(id)){
                return Optional.of(wizard);
            }
        }
        return Optional.empty();
    }

    public void delete(Wizard wizard){
        wizards.remove(wizard);
    }



    public WizardRepo(List<Wizard> wizards) {
        this.wizards = wizards;
    }

    public List<Wizard> getWizards() {
        return wizards;
    }

    public WizardRepo() {
    }



}
