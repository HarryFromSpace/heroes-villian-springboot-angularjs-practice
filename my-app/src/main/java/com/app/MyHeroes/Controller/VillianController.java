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

import com.app.MyHeroes.Pojo.Villian;
import com.app.MyHeroes.Service.VillianService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api/villians")
public class VillianController {

	@Autowired
	private VillianService villianService;
	
	@GetMapping("getAllVillians")
	public ResponseEntity<?> getAllVillians(){
		return villianService.getAllVillians();
		//return null;
	}
	
	
	@PostMapping("createVillian")
	public ResponseEntity<?> saveVillian(@Valid @RequestBody Villian villian,BindingResult result)throws Exception{
		
		ResponseEntity<?> error= villianService.validationName(result);
		if(error==null)
				return villianService.saveVillian(villian);
		else
				return error; 
	}
	
	@GetMapping("deleteVillian/{id}")
	public ResponseEntity<?> deleteVillian(@PathVariable Integer id) {
		System.out.println("in villian controller");
		return villianService.deleteVillian(id);
	}
	
	@PostMapping("updateVillian")
	public ResponseEntity<?> updateVillian(@Valid @RequestBody Villian villian){
		System.out.println("in villian controller");
		return villianService.updateVillian(villian);
	}
	
	@PostMapping("transferVillian")
	public ResponseEntity<?> transferVillian(@Valid @RequestBody Villian villian){
		return villianService.transferVillian(villian);
	}
	
}
