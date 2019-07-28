package city.tour;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

	//@Query(value="select * from User where Email_Id = :email", nativeQuery = true)
	//List<User> findByEmail(@Param("email") String city);

	

}
