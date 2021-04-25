import routes from "src/services/api/routes";
import expressRouter from "express-promise-router";

const router = expressRouter();

router.get("/", (req, res) => {
  res.send("Welcome to the API!")
})
router.use("/weather", routes.weather);

export default router;