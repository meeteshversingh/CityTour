package city.tour;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationDao extends JpaRepository<Location, Integer>{
	
	@Query(value="select * from location where City = :city",nativeQuery = true)
	List<Location> findByCity(@Param("city") String city);
	
	@Query(value="select * from location where Duration = :duration",nativeQuery = true)
	List<Location> findByDuration(@Param("duration") int duration);

	/*@Query(value="update City,Places,Duration where Category=:category",nativeQuery=true)
	Optional<Location> findByCategory(String category);*/

	
}
