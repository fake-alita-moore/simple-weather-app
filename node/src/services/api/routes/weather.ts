import expressRouter from "express-promise-router";
import controllers from "src/controllers"

const router = expressRouter();

router.get("/:lat/:lon", controllers.WeatherController.handleGetWeatherFromLatAndLon)

export default router;