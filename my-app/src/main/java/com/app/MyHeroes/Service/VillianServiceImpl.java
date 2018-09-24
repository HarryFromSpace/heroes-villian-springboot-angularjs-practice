/**
 * 
 */
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

/**
 * @author nagpalh
 *
 */
@Service
@Transactional
public class VillianServiceImpl implements VillianService {

	@Autowired
	private VillianDao villianDao;
	@Autowired
	private HeroDao heroDao;
	
	@Override
	public ResponseEntity<?> getAllVillians() {
		List<Villian> villians=villianDao.getAllVillians();
		return ResponseEntity.ok().body(villians);
	}

	
	@Override
	public ResponseEntity<?> saveVillian(Villian villian) {
		Villian villianResponse = villianDao.saveVillian(villian);
		return ResponseEntity.ok().body(villianResponse);
	}

	
	@Override
	public ResponseEntity<?> validationName(BindingResult result) throws Exception {
		if(result.hasFieldErrors("name"))
			throw new Exception("Username Already Exists");
		else
			return null;
	}


	@Override
	public ResponseEntity<?> deleteVillian(Integer id) {
		String str= villianDao.deleteVillian(id);
		return ResponseEntity.ok().body(str);
	}


	@Override
	public ResponseEntity<?> updateVillian(Villian villian) {
		System.out.println("in villian service");
		Villian updatedVillian = villianDao.updateVillian(villian);
		return ResponseEntity.ok().body(updatedVillian);
	}

	@Override
	public ResponseEntity<?> transferVillian(Villian villian) {
		Hero h=convertVillianToHero(villian);
		heroDao.saveHero(h);
		villianDao.deleteVillian(villian.getId());
		String str=h.getName()+" moved to Heroes...!!!!";
		return ResponseEntity.ok().body(str);
	}
	
	private Hero convertVillianToHero(Villian villian) {
		Hero h=new Hero();
		h.setName(villian.getName());
		h.setPoints(villian.getPoints());
		h.setPower(villian.getPower());
		System.out.println("hahha");
		h.setCreatedAt(villian.getCreatedAt());
		System.out.println("bla bla");
		return h;
	}

}
