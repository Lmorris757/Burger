//Create a table/model if it doesn't already exists//

module.exports = function(sequelize, type) {
    burger = sequelize.define("burgers", {
        // id: {
        //     type: type.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        burger_name: type.STRING,
        devoured: type.BOOLEAN  
    }
    // , {
    //     // set timestamps to false to keep the sequelized model from automatically adding the "updates at:" and "created at:" fields//
    //     timestamps: false
    // }
    )
    return burger;
}