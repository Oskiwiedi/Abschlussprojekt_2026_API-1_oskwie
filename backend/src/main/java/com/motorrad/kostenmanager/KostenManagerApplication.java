// KostenManagerApplication.java
// Einstiegspunkt der Spring Boot Anwendung, startet den eingebetteten Webserver
// Autor: Oskar Wiederhold

package com.motorrad.kostenmanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class KostenManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(KostenManagerApplication.class, args);
	}

}
