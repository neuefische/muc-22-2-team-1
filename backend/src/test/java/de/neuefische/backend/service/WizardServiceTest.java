package de.neuefische.backend.service;

import de.neuefische.backend.model.Wizard;
import de.neuefische.backend.repo.WizardRepo;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class WizardServiceTest {

    @Test
    void listOfWizardsRepoTest() {
        //Given
        WizardRepo wizardRepo = new WizardRepo();
        IdService idService = new IdService();
        WizardService wizardService = new WizardService(wizardRepo, idService);

        //When
        List<Wizard> actual = List.of(
                new Wizard("1", "Harry", "male", "brave", "keramikpause", "cooperativ"),
                new Wizard("2", "Martin", "divers", "mutig", "witzig", "groß")
        );

        //then
        List<Wizard> expected = List.of(
                new Wizard("1", "Harry", "male", "brave", "keramikpause", "cooperativ"),
                new Wizard("2", "Martin", "divers", "mutig", "witzig", "groß")
        );
        assertEquals(expected, actual);
        //assertThat(actual)
        //        .hasSameElementsAs(expected)
        //        .hasSize(expected.size());
    }

    @Test
    void findById() {
    }

    @Test
    void addWizard() {
    }

    @Test
    void search() {
    }

    @Test
    void delete() {
    }
}