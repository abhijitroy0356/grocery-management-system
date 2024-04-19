import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/adminlogin", async (req, res) => {
  const sql = await "SELECT * FROM admin where email = ?";
  con.query(sql, [req.body.email], (err, result) => {
    console.log(result.length)
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: "admin", email: email },
        "jwt_secret_key",
        { expiresIn: "1d" }
      );
      res.cookie('token',token)
      return res.json({ loginStatus: true });
    }else{
        return res.json({ loginStatus: false, Error: "wrong cred" });
    }
  });
});

router.post('/addcategory', async (req,res)=>{
    const sql= await "INSERT INTO category (`name`,`description`,`status`) VALUES (?,?,?)"
    con.query(sql,[req.body.category, req.body.descriptioninfo, req.body.statusinfo],(err, result)=>{
        if(err)return res.json({
            Status:false,
            Error:"query error"
        })
        return res.json({
            Status:true
        })
    })
})
router.get('/category',async (req,res)=>{
    const sql= await "SELECT * FROM category"
    con.query(sql,(err ,result)=>{
        if(err){return res.json({Status:false, Error : "wrong in query"})}
        return res.json({Status:true,Result:result})
    })
})
router.post('/addproduct',(req,res)=>{
    
    const sql=`INSERT INTO product (product_name,pack_size,mrp,image,status,category) VALUES (?,?,?,?,?,?)`
        // console.log([req.body.productname,req.body.packsize,req.body.mrp,req.body.imginfo,req.body.status,req.body.category])
        // console.log(req.body)
    con.query(sql,[req.body.productname,req.body.packsize,req.body.mrp,req.body.imginfo,req.body.status,req.body.selectCategory],(err,result)=>{
        if(err) console.log(err)
        return res.json({Status:true})
    })
})
router.get('/product',async (req,res)=>{
    const sql=await "SELECT * FROM product"
    con.query(sql,(err, result)=>{
        if(err){
            return res.json({
                Status:false,
                Error:"problem in query"
            })
        }
        return res.json({
            Status:true,
            Result:result
        })
    })
})
export { router as adminRouter };
