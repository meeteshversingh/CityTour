package city.tour;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class ProController {

	private ProService ser;

	@Autowired
	public void setSer(ProService ser) {
		System.out.println("Service wired to Controller");
		this.ser = ser;
	}
	@GetMapping("/insert")
	public Response set(@RequestParam("sno") int id,@RequestParam("city") String city,@RequestParam("category") String category,@RequestParam("places") String places,@RequestParam("duration") int duration)
	{
	   
		String str= ser.insertAll(id,city,category,places,duration);
		System.out.println(str);
		Response res = new Response();
		res.setO(str);
		return res;
			
	}
	@GetMapping("/selectall")
	public List<Location> get() {
		List<Location> x = ser.getAll();
		return x;

	}
	@GetMapping("/selectbycity")
	public List<Location> selectByCity(@RequestParam("city") String city)
	{
		
		List<Location> loc = ser.getByCity(city);
		return loc;

	}
	@GetMapping("/selectbyduration")
	public List<Location> selectByDuration(@RequestParam("duration") int duration)
	{
		
		List<Location> loc = ser.getByDuration(duration);
		return loc;

	}
	@GetMapping("/selectFb")
	public List<Feedback> getFeedback() {
		List<Feedback> x = ser.getAllFb();
		return x;

	}
	@GetMapping("/selectallusers")
	public List<User> getUsers() {
		List<User> usr = ser.getAllUsers();
		return usr;

	}
   
	@GetMapping("/update")
	public boolean edit(@RequestParam("sno") int id,@RequestParam("city") String city,@RequestParam("category") String category,@RequestParam("places") String places,@RequestParam("duration") int duration)
	{
		return ser.getUpdate(id,city,category,places,duration);
	}
	
	@GetMapping("/delete")
	public boolean delete(@RequestParam("sno") int id)
	{
		boolean str = ser.getDelete(id);
		return str;

	}

}
