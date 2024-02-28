import express from "express";
import { userData, userRegister,InsertData,getSensor,getallSensor,getNano,getNanoGraph,getLast,uploadImage,getImage,uploadImage2,getImage2} from "../controllers/sensor.js";

const router = express.Router();

//register
router.post('/register',userRegister);

//login 
router.post('/login',userData);

router.get('/InsertData',InsertData);

router.get('/getsensor', getSensor);

router.get('/getallsensor', getallSensor);

router.get('/getNano',getNano);

router.get('/getNanoGraph', getNanoGraph);

router.get('/getLast',getLast);

//image
router.post('/upload', uploadImage);
//image2
router.post('/upload2', uploadImage2);
//image-get
router.get('/getImage', getImage);
//image-get2
router.get('/getImage2', getImage2);

export default router;