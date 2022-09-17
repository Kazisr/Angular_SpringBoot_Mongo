package io.kazi.springMongoCloud.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import io.kazi.springMongoCloud.model.Student;

public interface StudentRepository extends MongoRepository<Student, String>{
	
    
}
