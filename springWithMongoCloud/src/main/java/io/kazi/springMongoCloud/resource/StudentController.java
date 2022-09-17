package io.kazi.springMongoCloud.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.kazi.springMongoCloud.model.Student;
import io.kazi.springMongoCloud.repository.StudentRepository;

@CrossOrigin("http://localhost:4200/")
@RestController
public class StudentController {
	Optional<Student> student = Optional.ofNullable(new Student());

@Autowired
private StudentRepository repo;	

@PostMapping("/addStudent")
public String saveStudent(@Validated @RequestBody Student st) {
	//System.out.println("called.....");
	repo.save(st);
	return "Added Student with id : "+st.getId();
}


@GetMapping("/findAllStudent")
public List<Student> getStudent() {
	return repo.findAll();
}

//@GetMapping("/findAllStudent/name/{firstName}")
//public List<Optional<Student>> findByName(@PathVariable String firstName){
//    return repo.findByNameStartingWith(firstName);
//}

@GetMapping("/findStudent/{id}")
public Optional<Student> getStudentById(@PathVariable String id){

	student = repo.findById(id);
	System.out.println(student.toString());
	return repo.findById(id);
	
}


///Getting ID as post request 
///Deleting with the post value
@PostMapping("/delete")
public String deleteStudent(@RequestBody String id) {
	System.out.println("delete called....");
	repo.deleteById(id);
	return "Succeed of delete Student with Id "+id;
}



}
