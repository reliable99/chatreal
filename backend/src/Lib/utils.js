import jwt from "jsonwebtoken"

export const generateToken = (userId, res) => {

const token = jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: "7d"
})

res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 *60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks cross-site scripting attack
    sameSite: "strict", // CRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development"

})
    return token;
}

// in this code we are generating a token and sending to user in form of cookies http i particular