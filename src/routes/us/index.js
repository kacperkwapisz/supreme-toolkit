import { Router } from 'express';

const router = Router();

router.get('/cart', async (req, res) => {
  try {
    const form = await req.context.models.cart.find();

    if (!form || (form && !form.length)) {
      return res.send([]);
    }
  
    const formData = form[0];
    const { data } = formData
    return res.send(data);
  } catch (err) {
    return res.send([]);
  }
});

router.get('/checkout', async (req, res) => {
  try {
    const form = await req.context.models.checkout.find().sort({ _id: -1 }).limit(1);

    if (!form || (form && !form.length)) {
      return res.send([]);
    }
  
    const formData = form[0];
    const { data } = formData
    return res.send(data);
  } catch (err) {
    return res.send([]);
  }
});

export default router;
