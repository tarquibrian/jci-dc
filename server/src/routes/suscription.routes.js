const { Router } = require("express");
const {
  getSuscriptions,
  getSuscription,
  setSuscription,
  updateSuscription,
  deleteSuscription,
} = require("../controllers/suscription.controllers");

const router = Router();

router.get("/", getSuscriptions);

router.get("/:id", getSuscription);

router.post("/", setSuscription);

router.put("/", updateSuscription);

router.delete("/:id", deleteSuscription);

module.exports = router;
