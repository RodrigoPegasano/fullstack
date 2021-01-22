const HomeController = {
    index: (req, res) => {

        let info = {
            titulo: "Digital House",
            cursos: ["FullStack", "TI", "Design", "Professora"]
        };
        return res.render("index", info);
    }
};

module.exports = HomeController;