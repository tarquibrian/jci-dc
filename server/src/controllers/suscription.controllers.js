const getSuscriptions = async (req, res) => {
  res.send("get suscriptions");
};

const getSuscription = async (req, res) => {
  const id = req.params.id;
  res.send(`param: ${id}`);
};

const setSuscription = async (req, res) => {
  res.send("seted suscription");
};

const updateSuscription = async (req, res) => {
  res.send("updated suscription");
};

const deleteSuscription = async (req, res) => {
  res.send("deleted suscription");
};

module.exports = {
  getSuscription,
  getSuscriptions,
  setSuscription,
  updateSuscription,
  deleteSuscription,
};
