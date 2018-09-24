package com.app.MyHeroes.Dao;

import java.util.List;

import com.app.MyHeroes.Pojo.Hero;

public interface HeroDao {

	List<Hero> getAllHeroes();
	Hero saveHero(Hero hero);
	String deleteHero(Integer id);
	Hero updateHero(Hero hero);

}
