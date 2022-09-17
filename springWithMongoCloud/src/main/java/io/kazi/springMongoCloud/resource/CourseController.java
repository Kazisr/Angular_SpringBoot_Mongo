package io.kazi.springMongoCloud.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.kazi.springMongoCloud.model.Course;
import io.kazi.springMongoCloud.model.Student;
import io.kazi.springMongoCloud.repository.CourseRepository;

@CrossOrigin("http://localhost:4200/")
@RestController
public class CourseController {
	
	@Autowired
	private CourseRepository courseRepo;	
	
	
	@PostMapping("/findAllCourse")
	public String saveCourse(@Validated @RequestBody Course cr) {
		//System.out.println("called.....");
		courseRepo.save(cr);
		return "Added Coure with Code : "+cr.getCourseCode();
	}
	
	@GetMapping("/findAllCourse")
	public List<Course> getCourse() {
		return courseRepo.findAll();
	}

	
	@GetMapping("/findAllCourse/name/{name}")
	public List<Course> getStudentByName(@PathVariable String name ) {
		return courseRepo.findAll();
	}

	@GetMapping("/findAllCourse/{id}")
	public Optional<Course> getStudentById(@PathVariable String code){
		
		return courseRepo.findById(code);
		
	}
	
	///Getting ID as post request 
	///Deleting with the post value
	@PostMapping("course/delete")
	public String deleteCourse(@RequestBody String code) {
		System.out.println("delete called....");
		courseRepo.deleteById(code);
		return "Succeed of delete Course with Code "+code;
	}

}
