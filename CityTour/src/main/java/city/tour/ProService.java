package city.tour;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service

public class ProService {

	private LocationDao dao;
	private FeedbackRepository dao1;
	private UserRepository dao2;

	@Autowired
	public void setDao(LocationDao dao) {
		System.out.println("Location Repository wired to service ");
		this.dao = dao;
	}
	@Autowired
	public void setDao1(FeedbackRepository dao1) {
		System.out.println("Feedback Repository wired to service ");
		this.dao1 = dao1;
	}

	@Autowired
	public void setDao2(UserRepository dao2) {
		System.out.println("User Repository wired to service ");
		this.dao2 = dao2;
	}
	

	public String insertAll(int id,String city,String category, String places, int duration)
	{
		Location l=new Location();
		l.setCity_Id(id);
		l.setCity(city);
		l.setCategory(category);
		l.setPlaces(places);
		l.setDuration(duration);
			dao.save(l);	
			return "Data Added Successfully";
				
	}

	public List<Location> getAll() {
		
		return dao.findAll();
	}

	public List<Location> getByCity(String city) {
		return dao.findByCity(city);
		
	}
	public List<Location> getByDuration(int duration) {
		return dao.findByDuration(duration);
		
	}
	public List<Feedback> getAllFb() {
		
		return dao1.findAll();
	}
	
	public Location getId(int id) {
		Optional<Location> loc = dao.findById(id);
		Location locatn = null;
		if (loc.isPresent()) {
			//return true;
			locatn = loc.get();
		}
		return locatn;
	}
	public boolean getUpdate(int id, String city, String category, String places, int duration) {
		Location loc=getId(id);
		
		if(loc!=null)
		{
			
			loc.setCity(city);
			loc.setCategory(category);
			loc.setPlaces(places);
			loc.setDuration(duration);
					
		}
		System.out.println(loc);
		dao.save(loc);
		return true;
		
		
	}
	public List<User> getAllUsers() {
		
		return dao2.findAll();
	}
	
	public boolean getDelete(int id) {
		Optional<Location> loc = dao.findById(id);
		
		if (loc.isPresent())
		{
			dao.deleteById(id);
			return true;
		} 
		else
		{
			return false;
		}		
		
	}

}
