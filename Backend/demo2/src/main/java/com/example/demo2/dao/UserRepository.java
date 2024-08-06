package
        com.example.demo2.dao;


import com.example.demo2.model.Personne;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;

public interface UserRepository  extends JpaRepository <Personne, Integer> {

    Optional<Personne> findByEmail(String email);
}