import jwt from "jsonwebtoken";

export const verifToken = (req, res, next) => {
    let token;

    const authHeader = req.headers.authorization || req.headers.auth;

    if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            console.log("The decoded user:", req.user);
            next(); 
        } catch (err) {
            return res.status(400).json({ message: "Token is not valid" });
        }
    } else {
        return res.status(401).json({ message: "No token, authorization denied" });
    }
};
