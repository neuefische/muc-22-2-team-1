package de.neuefische.backend.repo;

import de.neuefische.backend.model.Wizard;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Repository
public class WizardRepo {

    private List<Wizard>wizards = new ArrayList<>();

    public Wizard add(Wizard wizard){
        wizards.add(wizard);
        return wizard;
    }

    public Optional<Wizard> findById(String id){
        for (Wizard wizard: wizards){
            if (wizard.getId().equals(id)){
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

    public void setWizards(List<Wizard> wizards) {
        this.wizards = wizards;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        WizardRepo that = (WizardRepo) o;
        return Objects.equals(wizards, that.wizards);
    }

    @Override
    public int hashCode() {
        return Objects.hash(wizards);
    }

    @Override
    public String toString() {
        return "WizardRepo{" +
                "wizards=" + wizards +
                '}';
    }
}
