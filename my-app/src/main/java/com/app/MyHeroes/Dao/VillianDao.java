package com.app.MyHeroes.Dao;

import java.util.List;

import com.app.MyHeroes.Pojo.Villian;

public interface VillianDao {
	List<Villian> getAllVillians();
	Villian saveVillian(Villian villian);
	String deleteVillian(Integer id);
	Villian updateVillian(Villian villian);
}
