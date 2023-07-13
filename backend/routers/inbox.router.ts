import { Router } from "express";
import { verifyToken } from "../middlewares/token.middleware";
import { createInbox, getInboxes, viewUsers } from "../services/inbox.service";
import { fetchMessages } from "../services/message.service";

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

inboxRouter.post("/createInbox", (req, res, next) => {
  createInbox(req.body.userId, req.body.participatingUserId)
    .then((createdInbox) => {
      res.json({ data: createdInbox }).end();
    })
    .catch((err) => next(err));
});

inboxRouter.get("/viewInbox", (req, res, next) => {
  fetchMessages(req.body.inboxId)
    .then((messages) => {
      res.json({ data: messages }).end();
    })
    .catch((err) => next(err));
});
