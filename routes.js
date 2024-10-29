import express from 'express';
import controller from './controller.js';


const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bem-vindo à API do Currículo!');
});
router.get('/curriculo', controller.getCurriculo);
router.post('/criarCurriculo', controller.createCurriculo);
router.delete('/deletarCurriculo/:id', controller.deleteCurriculo);

export default router;
