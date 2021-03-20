import { Router } from 'express';

import CreateSessionService from '../services/CreateSessionService';
import SendRecoveryPasswordEmailService from '../services/SendRecoveryPasswordEmail';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const createSessionService = new CreateSessionService();

  const { user, token } = await createSessionService.execute({
    email,
    password,
  });

  return response.json({ user, token });
});

sessionsRouter.post('/recoveryPassword', async (request, response) => {
  const { email } = request.body;

  if (!email) {
    return response.status(400).json({
      message: 'Please, provide a valid email address',
    });
  }

  const sendRecoveryPasswordEmail = new SendRecoveryPasswordEmailService();

  await sendRecoveryPasswordEmail.execute(email);

  return response.json({
    message: 'if there is a user with that email, we sent it successfully',
  });
});

export default sessionsRouter;
