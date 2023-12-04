export const errorHandler = (err, req, res, next) => {
  if (err.name === 'notFound') {
    res.status(404).send(err.message);
    return;
  }
  console.log(err);
  if (err.code ==='P2003' || err.code === 'P2025') {
    res.status(404).send(err.message);
    return
  }

  res.status(500).send('algo de errado aconteceu');
};
