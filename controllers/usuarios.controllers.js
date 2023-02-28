const { response, request } = require('express')





const  usuariosGET = (req, res = response) => {

    const { q, nombre = 'no name', apikey = 123456, page = 1 , limit = 10 } = req.query

    res.json({ 

            ok: true,
            msg: "GET API - controlador - ",
            q,
            nombre,
            apikey,
            page,
            limit
    });
    
}


const usuariosPUT = (req = request, resp = response) =>{

   const { id } = req.params

    resp.json({

        ok: true,
        msg: "API PUT - CONTROLADOR!!! -",
        id : id
       

    });
}


const usuariosPOST = (req, resp = response) =>{

    const { nombre, edad } =  req.body

    resp.status(201).json({

        ok: true,
        msg: "API POST- CONTROLADOR -",
        nombre,
        edad

    });
}


const usuariosDELETE = (req, resp = response) =>{

    resp.json({

        ok: true,
        msg: "API DELETE- CONTROLADOR -"

    });
}


const usuariosPATCH = (req, resp = response) =>{

    resp.json({

        ok: true,
        msg: "API PATCH - CONTROLADOR -"

    });
}


module.exports = {
    usuariosGET,
    usuariosPUT,
    usuariosPOST,
    usuariosPATCH,
    usuariosDELETE

}