package com.dharshiny.onlinebloodbank.Service;

import com.dharshiny.onlinebloodbank.Repository.BloodRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Services implements InterfaceService{
    
    @Autowired
    private BloodRepository bloodRepository;

    @Override
    public void deleteOldSamples(){
        bloodRepository.deleteOldSamples();
    }

}
