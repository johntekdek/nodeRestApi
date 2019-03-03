const express = require("express");
const router = express.Router();
const app = express();

const port = 3000;

router.get('/employees');

app.use('/api',router);

app.listen(port, () => console.info(`Server is listening on ${port}`));
