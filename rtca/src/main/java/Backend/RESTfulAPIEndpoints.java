package Backend;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/auth")
public class RESTfulAPIEndpoints {

    @PostMapping("/login")
    public String loginUser(@RequestBody UserCredentials credentials) {
        // Validate user credentials and generate JWT token for authentication
        return "User logged in successfully";
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody UserData userData) {

        return "User registered successfully";
    }

    @GetMapping("/logout")
    public String logoutUser() {

        return "User logged out successfully";
    }

    @GetMapping("/user/{userId}")
    public UserData getUserDetails(@PathVariable String userId) {

        return new UserData("JohnDoe", "johndoe@example.com");
    }

    static class UserCredentials {
        private String username;
        private String password;

        // Getters and setters
        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

    static class UserData {
        private String username;
        private String email;

        public UserData(String username, String email) {
            this.username = username;
            this.email = email;
        }

        // Getters and setters
        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }
    }
}