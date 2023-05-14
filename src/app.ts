import express, {Application} from 'express';
import cors from 'cors';

const app: Application = express();

//Application routes 
import userRoutes from './app/module/user/user.routes';

//using cors
app.use(cors())

//parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/v1/user', userRoutes);

export default app;