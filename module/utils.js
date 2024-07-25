const productArray = [
    {id : 1, name : "mobile"},
    {id : 2, name : "laptop"},
    {id : 3, name : "tv"}
]

const features = [
    {id : 1, feature : "wifi", price : 100},
    {id : 2, feature : "bluetooth", price : 200},
    {id : 3, feature : "camera", price : 300}
]

const verifiedUser = {
    name : "Shoumen",
    age : 18,
    occupation : "Engineer",
    isVerified : true
}

function showVerifiedUser(user) {
    if(!user.isVerified) {
        return "User is not verified"
    }
    return `Name : ${user.name} Age : ${user.age} Occupation : ${user.occupation} Verified : ${user.isVerified}`
}

export {
    productArray,
    features,
    verifiedUser,
    showVerifiedUser
}