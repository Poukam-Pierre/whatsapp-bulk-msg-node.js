//  Made by Poukam Pierre

const wbm = require("wbm")

exports.sendWhatMsg = (req,res, next) =>{
    const excel_csvFile = JSON.parse(req.body.excel_csvFile)
    const {text} = req.body
    const phones = excel_csvFile.file.map((element)=> ({name: element.name, phone:`+${element.phone}`}))
    wbm.start({qrCodeData: true, session:false, showBrowser:false}).then(async(qrCodeData)=>{
        console.log(qrCodeData)
        res.status(201).send(qrCodeData)
        await wbm.waitQRCode()

        await wbm.send(phones, `Bonjour {{name}}. ${text}`);
        await wbm.end()
    }).catch((err)=>{
        if(err){
            console.error("Error while send :", err)
        }
    })


}