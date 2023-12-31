const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req?.roles) return res.sendStatus(401);
        const rolesArray = [...allowedRoles];
        console.log(req.roles);
        const role=req.roles;
        // const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true);
        if(rolesArray.includes(role)){
            next();
        }
        else if(rolesArray.includes(role)===false){
            return res.sendStatus(401);
        }
    }
}

module.exports = verifyRoles