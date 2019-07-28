package city.tour;

import javax.persistence.Entity;

import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "User")
public class User {

	private String First_Name;
	private String Last_Name;
	@Id
	private String Email_Id;
	private String Password;
	private String Gender;
	private long Phone_No;
	private String City;
	private int Age;

	public String getFirst_Name() {
		return First_Name;
	}

	public void setFirst_Name(String first_Name) {
		this.First_Name = first_Name;
	}

	public String getLast_Name() {
		return Last_Name;
	}

	public void setLast_Name(String last_Name) {
		this.Last_Name = last_Name;
	}

	public String getEmail_Id() {
		return Email_Id;
	}

	public void setEmail_Id(String emailId) {
		this.Email_Id = emailId;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		this.Password = password;
	}

	public String getGender() {
		return Gender;
	}

	public void setGender(String gender) {
		this.Gender = gender;
	}

	public long getPhone_No() {
		return Phone_No;
	}

	public void setPhone_No(long phone_No) {
		this.Phone_No = phone_No;
	}

	public String getCity() {
		return City;
	}

	public void setCity(String city) {
		this.City = city;
	}

	public int getAge() {
		return Age;
	}

	public void setAge(int age) {
		this.Age = age;
	}

	public User(String First_Name, String Last_Name, String emailId, String Password, String Gender, long Phone_No,
			String City, int Age) {

		this.First_Name = First_Name;
		this.Last_Name = Last_Name;
		this.Email_Id = emailId;
		this.Password = Password;
		this.Gender = Gender;
		this.Phone_No = Phone_No;
		this.City = City;
		this.Age = Age;
	}

	public User() {

		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "User [First_Name=" + First_Name + ", Last_Name=" + Last_Name + ", Email_Id=" + Email_Id + ", Password="
				+ Password + ", Gender=" + Gender + ", Phone_No=" + Phone_No + ", City=" + City + ", Age=" + Age + "]";
	}

}
