package de.neuefische.backend.service;

import de.neuefische.backend.model.Wizard;
import de.neuefische.backend.repo.WizardRepo;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
    void findById() throws IllegalAccessException {

        //GIVEN
        Wizard givenWizard= new Wizard("testId","aaa","aaa","sss","bbb","ddd");
        when(wizardRepo.findById("testId")).thenReturn(Optional.of(givenWizard));


        //WHEN
        Wizard result = wizardService.findById(givenWizard.id());
        //THEN
        verify(wizardRepo).findById(givenWizard.id());
        assertEquals(givenWizard, result);
    }

    @Test
    void addWizard() {

        
        Wizard givenWizard= new Wizard("testId","aaa","aaa","sss","bbb","ddd");

        when(idService.generateId()).thenReturn("testId");
        when(wizardRepo.add(givenWizard)).thenReturn(givenWizard);
        Wizard result = wizardService.addWizard(givenWizard);

        verify(wizardRepo).add(givenWizard);
        assertEquals(givenWizard,result);
    }

    @Test
    void search() {
        
        
    }

    @Test
    void delete() throws IllegalAccessException {
        //GIVEN
        Wizard givenWizard= new Wizard("testId","aaa","aaa","sss","bbb","ddd");
        doNothing().when(wizardRepo).delete(givenWizard);
        when(wizardRepo.findById(givenWizard.id())).thenReturn(Optional.of(givenWizard));

        //WHEN
        wizardService.delete(givenWizard.id());
        //THEN
        verify(wizardRepo).delete(givenWizard);

    }
}