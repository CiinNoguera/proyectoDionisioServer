function register(req, res) {
    console.log(req.body);

    res.status(200).send({ msg: 'Todo OK'});
}

module.exports= {
    register,
};