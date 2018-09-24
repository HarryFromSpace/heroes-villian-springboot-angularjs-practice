package com.app.MyHeroes.Dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.app.MyHeroes.Pojo.Villian;

@Repository
public class VillianDaoImpl implements VillianDao {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<Villian> getAllVillians() {
		return em.createQuery("select v from Villian v", Villian.class).getResultList();
	}

	@Override
	public Villian saveVillian(Villian villian) {
		System.out.println("hiiiiiiii backend");
		em.persist(villian);
		return villian;
	}

	@Override
	public String deleteVillian(Integer id) {
		Villian villian=em.find(Villian.class, id);
		String str=villian.getName()+" Deleted Successfully!";
		em.remove(villian);
		return str;
	}

	@Override
	public Villian updateVillian(Villian villian) {
		System.out.println("in villian dao");
		return em.merge(villian);
	}

}
