package city.tour;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="location")
public class Location {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int City_Id;
	private String City;
	private String Category;
	private String Places;
	private int Duration;
	
	
	
	
	@Override
	public String toString() {
		return "Location [City_Id=" + City_Id + ", City=" + City + ", Category=" + Category + ", Places=" + Places
				+ ", Duration=" + Duration + "]";
	}
	
	public Location( int id, String city, String category, String places, int duration)
	{
		this.City_Id=id;
		this.City = city;
		this.Category = category;
		this.Places = places;
		this.Duration = duration;
		
		
	}
	public Location() {
		
	}

	public int getCity_Id() {
		return City_Id;
	}
	public void setCity_Id(int id) {
		this.City_Id=id;
	}
	public String getCity() {
		return City;
	}
	public void setCity(String city) {
		this.City = city;
	}
	public String getCategory() {
		return Category;
	}
	public void setCategory(String category) {
		this.Category = category;
	}
	public String getPlaces() {
		return Places;
	}
	public void setPlaces(String places) {
		this.Places = places;
	}
	public int getDuration() {
		return Duration;
	}
	public void setDuration(int duration) {
		this.Duration = duration;
	}

}
