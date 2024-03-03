package Backend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ErrorHandlingValidation {

    private static final Logger logger = LoggerFactory.getLogger(ErrorHandlingValidation.class);

    public static boolean validateUserCredentials(UserCredentials credentials) {
        if (credentials.getUsername() != null && !credentials.getUsername().isEmpty() &&
            credentials.getPassword() != null && !credentials.getPassword().isEmpty()) {
            return true;
        } else {
            return false;
        }
    }

    public static boolean validateMessageContent(String content) {
        return !content.isEmpty();
    }

    public static boolean validateUserId(String userId) {
        return userId.matches("[a-zA-Z0-9]+");
    }

    public static void handleAuthenticationError() {
        logger.error("Authentication error occurred. Please check your credentials.");
    }

    public static void handleMessageValidationError() {
        logger.error("Message validation error: Message content cannot be empty.");
    }

    public static void handleUserIdFormatError() {
        logger.error("User ID format error: User ID must contain only letters and numbers.");
    }

    public static class UserCredentials {
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
}
