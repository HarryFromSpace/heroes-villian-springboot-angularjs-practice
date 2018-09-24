package com.app.MyHeroes.Service;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

import com.app.MyHeroes.Pojo.Villian;

public interface VillianService {
	ResponseEntity<?> getAllVillians();
	ResponseEntity<?> saveVillian(Villian villian);
	ResponseEntity<?> validationName(BindingResult result)throws Exception;
	ResponseEntity<?> deleteVillian(Integer id);
	ResponseEntity<?> updateVillian(Villian villian);
	ResponseEntity<?> transferVillian(Villian villian);
}
