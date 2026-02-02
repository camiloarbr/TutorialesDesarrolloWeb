import type { Request, Response } from 'express';
import { Router } from 'express';

import { HomeController } from '../controllers/HomeController';

export default class Routes {

  static initializeRoutes(): Router {

    const router = Router();

    router.get('/', HomeController.index);
    router.get('/about', HomeController.about);
    router.get('/contact', HomeController.contact);

    return router;

  }

}
