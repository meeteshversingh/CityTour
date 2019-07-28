package city.tour;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="feedback")
public class Feedback {
	
	@Id
	private String Email_Id;
	private long Contact_No;
	@Column(name="date")
	private Calendar date ;
	private String Comments;
	
	public String getEmail_Id() {
		return Email_Id;
	}
	
	public void setEmail_Id(String email_Id) {
		this.Email_Id = email_Id;
	}
	
	public long getContact_No() {
		return Contact_No;
	}
	
	public void setContact_No(long contact_No) {
		this.Contact_No = contact_No;
	}
	
	public Calendar getDate() {
		return date;
	}
	
	public void setDate(Calendar date) {
		
		this.date = date;
	}
	
	public String getComments() {
		return Comments;
	}
	
	public void setComments(String comments) {
		this.Comments = comments;
	}

	public Feedback(String email_Id, long contact_No, String date, String comments) {
		
		this.Email_Id = email_Id;
		this.Contact_No = contact_No;
		this.date= Calendar.getInstance();
		this.Comments = comments;
	}

	public Feedback() {
		
		// TODO Auto-generated constructor stub
	}

	
	
	
	//new SimpleDateFormat("yyyy-MM-dd").parse(date);
	
	
	
	

}
