package de.neuefische.backend.controller;

import de.neuefische.backend.model.Wizard;
import de.neuefische.backend.service.WizardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/wizard-students")
public class WizardController {

    private  final WizardService wizardService;

    @Autowired
    public WizardController(WizardService wizardService) {
        this.wizardService = wizardService;
    }

    @GetMapping
    public List<Wizard> listWizards(@RequestParam Optional<String> search) {
        if (search.isPresent()) {
            return wizardService.search(search.get());
        }
        return wizardService.list();
    }

    @GetMapping("{id}")
    public Wizard getWizard(@PathVariable String id) throws IllegalAccessException {
        return wizardService.findById(id);
    }

    @PostMapping()
    public Wizard addWizard(@RequestBody Wizard wizard){
        return wizardService.addWizard(wizard);
    }

    @DeleteMapping("{id}")
    public void deleteWizard(@PathVariable String id) throws IllegalAccessException {
        wizardService.delete(id);
    }
}



















