package de.neuefische.backend.repo;

import de.neuefische.backend.model.Wizard;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface WizardRepo extends MongoRepository <Wizard,String> {

}
