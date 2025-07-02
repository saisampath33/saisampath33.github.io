db.createUser({
    user:"admin",
    pwd:"admin",
    roles:[{role:"root",db:"admin"}]
})

db.createUser({
    user:"user1",
    pwd:"user1",
    roles:[{role:"read",db:"lpua"}]
})