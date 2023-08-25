const router = require("express").Router()
const credentials = require("../config/secrets.json")
const spreadSheetId = require("../config/keys").google.sheetId
const { google } = require("googleapis")

const client = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    ["https://www.googleapis.com/auth/spreadsheets"]
)

const sheets = google.sheets("v4")

router.post("/", async (req, res) => {

    console.log(req.body)

    const link = req.body.link

    try
    {
        await client.authorize()
        const response = await sheets.spreadsheets.values.append({
            auth: client,
            spreadsheetId: spreadSheetId,
            range: "Sheet1",
            valueInputOption: "RAW",
            insertDataOption: "INSERT_ROWS",
            resource: {
                values: [[link]]
            }
        })

        console.log(response.data)
        res.json({success: true})
    }
    catch (error)
    {
        console.error("Error: ", error)
        res.status(500).json({success: false, error: error.message})
    }

    // res.send("Can you hear me?")
})

module.exports = router