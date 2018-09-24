package com.app.MyHeroes.Controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.MyHeroes.Pojo.Hero;
import com.app.MyHeroes.Service.HeroService;


@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api/heroes")
public class HeroController {

	@Autowired
	private HeroService heroService;
	
	@GetMapping("getAllHeroes")
	public ResponseEntity<?> getAllHeroes(){
		return heroService.getAllHeroes();
		//return null;
	}
	
	
	@PostMapping("createHero")
	public ResponseEntity<?> saveHero(@Valid @RequestBody Hero hero,BindingResult result)throws Exception{
		
		ResponseEntity<?> error= heroService.validationName(result);
		if(error==null)
				return heroService.saveHero(hero);
		else
				return error; 
	}
	
	@GetMapping("deleteHero/{id}")
	public ResponseEntity<?> deleteHero(@PathVariable Integer id) {
		return heroService.deleteHero(id);
	}
	
	@PostMapping("updateHero")
	public ResponseEntity<?> updateHero(@Valid @RequestBody Hero hero){
		return heroService.updateHero(hero);
	}
	@PostMapping("transferHero")
	public ResponseEntity<?> transferHero(@Valid @RequestBody Hero hero){
		return heroService.transferHero(hero);
	}
}
