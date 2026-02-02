import path from 'path';
import express from 'express';
import type { Application } from 'express';
import expressLayouts from 'express-ejs-layouts';
import Routes from './routes/Routes.js';

class Index {
  static startServer(): void {
    const app: Application = express();
    const PORT = process.env.PORT || 3000;

    app.set('view engine', 'ejs');
    app.set('views', path.join(process.cwd(), 'src/views'));

    app.use(expressLayouts);
    app.set('layout', 'layouts/app');

    app.use(express.static(path.join(process.cwd(), 'src/public')));

    app.use(Routes.initializeRoutes());

    const server = app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

    server.on('error', (err: NodeJS.ErrnoException) => {
      if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Try another port or close the other process.`);
      } else {
        console.error('Server error:', err.message);
      }
      process.exit(1);
    });
  }
}

Index.startServer();
