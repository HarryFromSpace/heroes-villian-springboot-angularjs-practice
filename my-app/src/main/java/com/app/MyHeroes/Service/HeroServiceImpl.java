package com.app.MyHeroes.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.app.MyHeroes.Dao.HeroDao;
import com.app.MyHeroes.Dao.VillianDao;
import com.app.MyHeroes.Pojo.Hero;
import com.app.MyHeroes.Pojo.Villian;

@Service
@Transactional
public class HeroServiceImpl implements HeroService {

	@Autowired
	private HeroDao heroDao;
	@Autowired
	private VillianDao villianDao;
	
	@Override
	public ResponseEntity<?> getAllHeroes() {
		List<Hero> heroes=heroDao.getAllHeroes();
		return ResponseEntity.ok().body(heroes);		
	}

	@Override
	public ResponseEntity<?> saveHero(Hero hero){
		Hero heroResponse = heroDao.saveHero(hero);
		return ResponseEntity.ok().body(heroResponse);
	}

	@Override
	public ResponseEntity<?> validationName(BindingResult result)throws Exception {
		if(result.hasFieldErrors("name"))
			throw new Exception("Username Already Exists");
		else
			return null;
	}

	@Override
	public ResponseEntity<?> deleteHero(Integer id) {
		String str= heroDao.deleteHero(id);
		return ResponseEntity.ok().body(str);
	}

	@Override
	public ResponseEntity<?> updateHero(Hero hero) {
		Hero updatedHero = heroDao.updateHero(hero);
		return ResponseEntity.ok().body(updatedHero);
	}

	@Override
	public ResponseEntity<?> transferHero(Hero hero) {
		Villian v=convertHeroToVillian(hero);
		villianDao.saveVillian(v);
		heroDao.deleteHero(hero.getId());
		String str=v.getName()+" moved to Villians...!!!!";
		return ResponseEntity.ok().body(str);
	}
	
	private Villian convertHeroToVillian(Hero hero) {
		Villian v=new Villian();
		v.setName(hero.getName());
		v.setPoints(hero.getPoints());
		v.setPower(hero.getPower());
		System.out.println("hahha");
		v.setCreatedAt(hero.getCreatedAt());
		System.out.println("bla bla");
		return v;
	}

}
