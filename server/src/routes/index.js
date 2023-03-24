import authRoute from "./authRoute";
import insertRoute from "./insertRoute";
import categoryRoute from "./categoryRoute";
import postRoute from "./postRoute";
import priceRoute from "./priceRoute";
import areaRoute from "./areaRoute";
import provinceRoute from "./provinceRoute";
import userRoute from "./userRoute";

const initRoutes = (app) => {
  app.use("/api/v1/auth", authRoute);
  app.use("/api/v1/insert", insertRoute);
  app.use("/api/v1/category", categoryRoute);
  app.use("/api/v1/post", postRoute);
  app.use("/api/v1/price", priceRoute);
  app.use("/api/v1/area", areaRoute);
  app.use("/api/v1/province", provinceRoute);
  app.use("/api/v1/user", userRoute);

  //Neu kh khop voi cac route o tren => Redirect to '/'
  return app.use("/", (req, res) => {
    res.send("server on...");
  });
};

export default initRoutes;
