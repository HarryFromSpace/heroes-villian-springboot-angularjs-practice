package com.app.MyHeroes.Service;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

import com.app.MyHeroes.Pojo.Hero;

public interface HeroService {
	ResponseEntity<?> getAllHeroes();
	ResponseEntity<?> saveHero(Hero hero);
	ResponseEntity<?> validationName(BindingResult result)throws Exception;
	ResponseEntity<?> deleteHero(Integer id);
	ResponseEntity<?> updateHero(Hero hero);
	ResponseEntity<?> transferHero(Hero hero);
}
