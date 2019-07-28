package city.tour;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {
	
	private UserService serviceObject;

	@Autowired
	public void setServiceObject(UserService serviceObject) {
		System.out.println("User Service wired to user controller");
		this.serviceObject = serviceObject;
	}
	
	@GetMapping("/selectUser")
	public User selectUser(@RequestParam("email")String email) 
	{
		return  serviceObject.getUser(email);
		
	}
	
	@PostMapping("/updateUser")
	public User updateUser(@RequestBody User user) {
		return serviceObject.updateDetails(user);
	}
	
	
	@GetMapping("/insertUser")
	public Response insertUser(@RequestParam("firstname") String First_Name,@RequestParam("lastname") String Last_Name,@RequestParam("email") String Email_Id, @RequestParam("password")String Password, @RequestParam("gender") String Gender,@RequestParam("phone") long Phone_No,@RequestParam("city") String City,@RequestParam("age")int Age)
	{
		System.out.println("hello user");
		Response res = new Response();
		res.setO(serviceObject.registerationDetails(First_Name,Last_Name,Email_Id,Password,Gender,Phone_No,City,Age));
		System.out.println(res);
		return res;
		
	}
	 
	
	@GetMapping("/insertFeedback")
	public Response insertFeedback(@RequestParam("email") String Email_Id, @RequestParam("contact") long Contact_No,@RequestParam("date")  String date,@RequestParam("comments") String Comments)
	{
		Response res = new Response();
		res.setO(serviceObject.giveFeedback(Email_Id,Contact_No,date,Comments));
		return res;
		
	}
	
	@PostMapping("/savePlan")
	@CrossOrigin
	public Response insertFinalPlan(@RequestBody Plans plan)
	{
		Response res = new Response();
		res.setO(serviceObject.savePlan(plan));
		return res;
		
	}
	
	@PostMapping("/loginUser")
	public Response getLogin(@RequestBody User user)
	{
		System.out.println(user);
		Response res = serviceObject.authenticateUser(user);
		System.out.println(res);
		return res;
		
	}
	
	
	@GetMapping("/fetchAllPlan")
	public List<Plans> getAll(@RequestParam("email")String email_Id) {
		return serviceObject.getAllPlans(email_Id);
	}
}
