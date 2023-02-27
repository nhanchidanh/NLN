import authRouter from "./auth";
import insertRouter from "./insert";
import categoryRouter from "./category";
import postRouter from "./post";

const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/insert", insertRouter);
  app.use("/api/v1/category", categoryRouter);
  app.use("/api/v1/post", postRouter);

  //Neu kh khop voi cac route o tren => Redirect to '/'
  return app.use("/", (req, res) => {
    res.send("server on...");
  });
};

export default initRoutes;
