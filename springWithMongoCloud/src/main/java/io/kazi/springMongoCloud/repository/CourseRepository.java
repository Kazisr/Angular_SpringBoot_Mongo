package io.kazi.springMongoCloud.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import io.kazi.springMongoCloud.model.Course;

public interface CourseRepository extends MongoRepository<Course, String>{

}
