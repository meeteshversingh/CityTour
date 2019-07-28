package city.tour;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PlansRepository extends JpaRepository<Plans, Integer> {

	@Query(value="select * from Plans where Email_Id = :email_Id", nativeQuery = true)
	List<Plans> findbyEmail(@Param("email_Id") String email_Id);

}
