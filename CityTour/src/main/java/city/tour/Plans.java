package city.tour;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="plans")
public class Plans {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private String Id;
	private String Category;
	private String Places;
	private int Days;
	private String Hotel;
	@Column(name="Date")
	private Date date;
	private String Email_Id;
	
	
	public String getId() {
		return Id;
	}

	public void setId(String id) {
		Id = id;
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
		Places = places;
	}

	public int getDays() {
		return Days;
	}
	
	public void setDays(int days) {
		this.Days = days;
	}
	
	public String getHotel() {
		return Hotel;
	}
	
	public void setHotel(String hotel) {
		this.Hotel = hotel;
	}
	
	public Date getDate() {
		return date;
	}
	
	public void setDate(Date date) {
		this.date = date;
	}
	
	

	public String getEmail_Id() {
		return Email_Id;
	}

	public void setEmail_Id(String email_Id) {
		this.Email_Id = email_Id;
	}

	public Plans(String email_Id,String id,String category, String places, int days, String hotel, String date) {
		
		this.Id = id;
		this.Email_Id = email_Id;
		this.Category = category;
		this.Places = places;
		this.Days = days;
		this.Hotel = hotel;
		try {
			this.date = new SimpleDateFormat("yyyy-MM-dd").parse(date);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public Plans() {
		
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	

}
