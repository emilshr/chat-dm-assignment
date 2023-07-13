import { Router } from "express";
import { verifyToken } from "../middlewares/token.middleware";
import { getInboxes, viewUsers } from "../services/inbox.service";

export const inboxRouter = Router();

inboxRouter.use(verifyToken);

inboxRouter.get("/getInboxes", (req, res, next) => {
  getInboxes(req.body.userId)
    .then((inboxes) => {
      res.json({ data: inboxes }).end();
    })
    .catch((err) => next(err));
});

inboxRouter.get("/viewUsers", (req, res, next) => {
  viewUsers(req.body.userId)
    .then((users) => {
      res.json({ data: users }).end();
    })
    .catch((err) => next(err));
});
