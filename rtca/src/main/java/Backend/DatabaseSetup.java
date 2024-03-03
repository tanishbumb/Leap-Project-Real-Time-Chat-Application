package Backend;

import java.io.IOException;


import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;

public class DatabaseSetup {

    private String databaseType;

    public DatabaseSetup(String databaseType) {
        this.databaseType = databaseType;
    }

    public void setupDatabase() {
        if (databaseType.equals("MongoDB")) {
            setupMongoDB();
        } else if (databaseType.equals("Postgres")) {
            setupPostgres();
        } else if (databaseType.equals("H2")) {
            setupH2();
        } else {
            System.out.println("Unsupported database type");
        }
    }

    private void setupMongoDB() {
        // Code to set up MongoDB database connection

        System.out.println("Setting up MongoDB database...");
    }

    private void setupPostgres() {
        // Code to set up Postgres database connection
        System.out.println("Setting up Postgres database...");
    }
    
    private void setupH2() {
        DataSource dataSource = new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .build();

        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        System.out.println("Setting up H2 in-memory database...");

        // Execute SQL scripts for initialization
        jdbcTemplate.execute("CREATE TABLE IF NOT EXISTS users (id INT, username VARCHAR(255), password VARCHAR(255));");
        jdbcTemplate.execute("INSERT INTO users (id, username, password) VALUES (1, 'admin', 'password');");
        
        System.out.println("Completed Initialisation !");
    }

    public static void main(String[] args) {
        DatabaseSetup dbSetup = new DatabaseSetup("MongoDB"); 
        dbSetup.setupDatabase();
        
     
        System.out.println("Press Enter to exit.");
        try {
            System.in.read();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
