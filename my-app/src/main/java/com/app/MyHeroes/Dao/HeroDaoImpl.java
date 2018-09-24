package com.app.MyHeroes.Dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.app.MyHeroes.Pojo.Hero;

@Repository
public class HeroDaoImpl implements HeroDao {
	
	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<Hero> getAllHeroes() {
		return em.createQuery("select h from Hero h", Hero.class).getResultList();
		//return factory.getCurrentSession().createCriteria(Hero.class).list();
	}

	@Override
	public Hero saveHero(Hero hero) {
			em.persist(hero);
			return hero;
	}

	@Override
	public String deleteHero(Integer id) {
		Hero hero=em.find(Hero.class, id);
		String str=hero.getName()+" Deleted Successfully!";
		
		em.remove(hero);
		
		return str;
		
	}

	@Override
	public Hero updateHero(Hero hero) {
		return em.merge(hero);
	}

}
