const { z } = require('zod');
const jwt = require('jsonwebtoken');

const jwtPassword = "secret";

// Schema for input validation
const UserSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6),
});

// Function to sign a JWT
function signJwt(username, password) {
    try {
        // Validate input
        const { username: validatedUsername, password: validatedPassword } = UserSchema.parse({
            username,
            password,
        });

        // Sign and return JWT
        const token = jwt.sign({ username: validatedUsername }, jwtPassword);
        return token;
    } catch (error) {
        // Input validation failed
        return null;
    }
}

// Function to decode a JWT
function decodeJwt(token) {
    try {
        // Decode and return the payload
        const decoded = jwt.decode(token);
        return decoded;
    } catch (error) {
        // Decoding failed
        return null;
    }
}

// Function to verify a JWT
function verifyJwt(token) {
    try {
        // Verify and return true if successful
        jwt.verify(token, jwtPassword);
        return true;
    } catch (error) {
        // Verification failed
        return false;
    }
}

module.exports = { signJwt, decodeJwt, verifyJwt };
