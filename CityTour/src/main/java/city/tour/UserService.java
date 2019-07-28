package city.tour;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;
@Service
public class UserService {
	
	private UserRepository userObject;

	@Autowired
	public void setRepositoryObject(UserRepository userObject) {
		System.out.println("Repository wired to service");
		this.userObject = userObject;
	}
	
	private FeedbackRepository feedbackObject;

	@Autowired
	public void setFeedbackObject(FeedbackRepository feedbackObject) {
		System.out.println("Feedback repository wired to service");
		this.feedbackObject = feedbackObject;
	}
	
	private PlansRepository plansObject;
	
	@Autowired
	public void setPlansObject(PlansRepository plansObject) {
		System.out.println("Plans repository wired to service");
		this.plansObject = plansObject;
	}
	
	

	public UserService() {
		
		// TODO Auto-generated constructor stub
	}


	public User getUser(String email) {
		// TODO Auto-generated method stub
		
		return userObject.findById(email).get();
		
	}

	public User updateDetails(User user) {
		// TODO Auto-generated method stub
		userObject.save(user); 
		return user;
	}

	
	public String registerationDetails(String First_Name, String Last_Name, String Email_Id, String Password,
			String Gender, long Phone_No, String City, int Age) {
		// TODO Auto-generated method stub
		
		User register = new User(First_Name,Last_Name,Email_Id,Password,Gender,Phone_No,City,Age);
		userObject.save(register);
		return "Added Successfully";
	}
	 

	public String giveFeedback(String Email_Id, long Contact_No, String date, String Comments) {
		// TODO Auto-generated method stub
		feedbackObject.save(new Feedback(Email_Id,Contact_No,date,Comments));
		return "Added Successfully";
	}

	public String savePlan(Plans plan) {
		// TODO Auto-generated method stub
		plansObject.save(plan);
		return "Added Successfully";
	}



	public Response authenticateUser(User user) {
		// TODO Auto-generated method stub
		Optional<User> u = userObject.findById(user.getEmail_Id());
		System.out.println(u);
		Response res = new Response();
		if(u.isPresent())
		{
			User usr = u.get();
			if(usr.getPassword().equals(user.getPassword())) {
				res.setStatus(true);
				return res;
			}
			
			res.setStatus(false);
			res.setO("Wrong Password");
			return res;
		}
		res.setStatus(false);
		res.setO("Wrong Credentials");
		return res;
	}



	public List<Plans> getAllPlans(String email_Id) {
		// TODO Auto-generated method stub
		return plansObject.findbyEmail(email_Id);
	}

	

	
	
	

}
