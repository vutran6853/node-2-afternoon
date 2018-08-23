
module.exports = {
  create: (( req, res, next ) => {
    // console.log(req)
    const dbInstance = req.app.get('db');
    const { name, desciption, price, image_url } = req.body;


    dbInstance.create_product( [ name, desciption, price, image_url ] )
    .then( () => {
      res.status(200)
    })
    .catch(error => {
      res.status(500).send({ errorMessage: "Oops! Something went wrong. Our Engineers have been informed "});
      console.log(error);
    })
  }),

  getOne: (( req, res, next ) => {
    // console.log(req)
    const dbInstance = req.app.get('db');

    dbInstance.read_product( [ params.id, query.desc] )
    .then( (product) => {
      console.log(product)
      res.status(200).json(product)
    })
    .catch(error => {
      res.status(500).send({ errorMessage: "Oops! Something went wrong. Our Engineers have been informed "});
      console.log(error);
    })
  }),
  
  getAll: (( req, res, next ) => {
    // console.log(req)
    const dbInstance = req.app.get('db');

    dbInstance.read_products()
    .then( products => 
      // console.log(products)
      res.status(200).send(products)
    )
    .catch(error => {
      res.status(500).send({ errorMessage: "Oops! Something went wrong. Our Engineers have been informed "});
      console.log(error);
    })
  }),

  update: (( req, res, next) => {
    // console.log(req)
    const dbInstance = req.app.get('db');

    dbInstance.update_product()
    .then( () => {
      res.status(200)
    })
    .catch(error => {
      res.status(500).send({ errorMessage: "Oops! Something went wrong. Our Engineers have been informed "});
      console.log(error);
    })
  }),
  
  delete: (( req, res, next) => {
    // console.log(req)
    const dbInstance = req.app.get('db');

    dbInstance.delete_product()
    .then( () => {
      res.status(200)
    })
    .catch(error => {
      res.status(500).send({ errorMessage: "Oops! Something went wrong. Our Engineers have been informed "});
      console.log(error);
    })
  })
};