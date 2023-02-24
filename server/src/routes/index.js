import authRouter from "./auth";
import insertRouter from "./insert";

const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/insert", insertRouter);

  //Neu kh khop voi cac route o tren => Redirect to '/'
  return app.use("/", (req, res) => {
    res.send("server on...");
  });
};

export default initRoutes;
