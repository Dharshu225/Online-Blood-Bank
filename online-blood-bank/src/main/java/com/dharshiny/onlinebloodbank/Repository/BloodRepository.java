package com.dharshiny.onlinebloodbank.Repository;

import com.dharshiny.onlinebloodbank.Model.Blood;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface BloodRepository extends JpaRepository<Blood,String>{
    @Transactional
    @Modifying
    @Query(value="DELETE from librarymanagement.blooddonar where ddate < DATE_SUB( NOW(),INTERVAL 90 DAY)", nativeQuery=true)
    void deleteOldSamples();
}
