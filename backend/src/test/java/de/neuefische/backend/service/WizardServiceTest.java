package de.neuefische.backend.service;

import de.neuefische.backend.model.*;
import de.neuefische.backend.repo.WizardRepo;
import org.junit.jupiter.api.Test;

import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

import static org.hamcrest.MatcherAssert.assertThat;

class WizardServiceTest {


    WizardRepo wizardRepo = mock(WizardRepo.class);
    IdService idService = mock(IdService.class);
    WizardService wizardService = new WizardService(wizardRepo, idService);

    @Test
    void listOfWizardExpectEmptyList() {
        //Given
        List<Wizard> explist = new ArrayList<>();

        List<Wizard> result = wizardService.list();

        assertEquals(explist, result);
    }

    @Test
    void findById() throws IllegalAccessException {

        //GIVEN
        Wizard givenWizard = new Wizard("testId", "aaa", Gender.WITCHER, Attribute1.AMBITIOUS, Attribute2.ASSERTIVE, Attribute3.INTROVERT, "GRYFFINDOR");
        when(wizardRepo.findById("testId")).thenReturn(Optional.of(givenWizard));


        //WHEN
        Wizard result = wizardService.findById(givenWizard.id());
        //THEN
        verify(wizardRepo).findById(givenWizard.id());
        assertEquals(givenWizard, result);
    }

    @Test
    void addWizard() {


        Wizard givenWizard = new Wizard("testId", "aaa", Gender.DIVERS, Attribute1.AMBITIOUS, Attribute2.ASSERTIVE, Attribute3.DILIGENT, "GRYFFINDOR");

        when(idService.generateId()).thenReturn("testId");
        when(wizardRepo.save(givenWizard)).thenReturn(givenWizard);
        Wizard result = wizardService.addWizard(givenWizard);

        verify(wizardRepo).save(givenWizard);
        assertEquals(givenWizard, result);
    }

    @Test
    public void search_testSearchStudent() {
        //GIVEN
        when(wizardRepo.findAll()).thenReturn(
                List.of(
                        new Wizard("testId1", "Nick", Gender.DIVERS, Attribute1.AMBITIOUS, Attribute2.ASSERTIVE, Attribute3.DILIGENT, "GRYFFINDOR"),
                        new Wizard("testId2", "Lis", Gender.DIVERS, Attribute1.AMBITIOUS, Attribute2.ASSERTIVE, Attribute3.DILIGENT, "GRYFFINDOR"),
                        new Wizard("testId3", "Johanna", Gender.DIVERS, Attribute1.AMBITIOUS, Attribute2.ASSERTIVE, Attribute3.DILIGENT, "GRYFFINDOR")

                )
        );
        WizardService wizardService = new WizardService(wizardRepo, idService);

        //WHEN
        List<Wizard> actual = wizardService.search("Ni");

        //THEN
        assertThat(actual, containsInAnyOrder(
                new Wizard("testId1", "Nick", Gender.DIVERS, Attribute1.AMBITIOUS, Attribute2.ASSERTIVE, Attribute3.DILIGENT, "GRYFFINDOR")
                       ));


    }

    @Test
    void delete() throws IllegalAccessException {
        //GIVEN
        Wizard givenWizard = new Wizard("testId", "aaa", Gender.WITCHER, Attribute1.AMBITIOUS, Attribute2.ASSERTIVE, Attribute3.INTROVERT, "RAVENCLAW");
        doNothing().when(wizardRepo).delete(givenWizard);
        when(wizardRepo.findById(givenWizard.id())).thenReturn(Optional.of(givenWizard));

        //WHEN
        wizardService.delete(givenWizard.id());
        //THEN
        verify(wizardRepo).delete(givenWizard);

    }

    @Test
    void selectHouse_shouldSelectGryffendor_when_BraveCourregousDetermined() {

        //GIVEN
        Wizard givenWizard = new Wizard("testId", "aaa", Gender.WITCHER, Attribute1.BRAVE, Attribute2.COURAGEOUS, Attribute3.DETERMINED, "RAVENCLAW");

             //WHEN
        String expected = String.valueOf("GRYFFINDOR");

        String result = wizardService.selectHouse(givenWizard);
        //THEN
        assertEquals(expected, result);
    }
}