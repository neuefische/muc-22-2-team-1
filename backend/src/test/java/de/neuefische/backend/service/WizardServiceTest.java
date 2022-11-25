package de.neuefische.backend.service;

import de.neuefische.backend.model.Wizard;
import de.neuefische.backend.repo.WizardRepo;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;
import static org.mockito.Mockito.*;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class WizardServiceTest {


    WizardRepo wizardRepo = mock(WizardRepo.class);
    IdService idService = mock(IdService.class);
    WizardService wizardService = new WizardService(wizardRepo,idService);
    @Test
    void listOfWizardExpectEmptyList() {
        //Given
        List<Wizard> explist= new ArrayList<>();

        List<Wizard> result = wizardService.list();

        assertEquals(explist,result);
    }

    @Test
    void findById() {
    }

    @Test
    void addWizard() {
        Wizard givenWizard= new Wizard("1","aaa","aaa","sss","bbb","ddd");

        when(wizardRepo.add(givenWizard)).thenReturn(givenWizard);
        Wizard result = wizardService.addWizard(givenWizard);

        assertEquals(givenWizard,result);
        verify(wizardRepo).add(givenWizard);


    }

    @Test
    void search() {
    }

    @Test
    void delete() {
    }
}