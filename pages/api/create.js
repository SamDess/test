const AirtablePlus = require("airtable-plus")

const airtable = new AirtablePlus({
    baseID: 'app4mnOxWV48wdZGV',
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: "Buyers"
})

export default async (req, res) => {
    if (req.query) {
        const record = await airtable.create({
             "First Name": req.query.firstName,
             "Last Name": req.query.lastName,
             "email": req.query.email,
             "s num": req.query.sNumber,
             "price": "$" + req.query.total,
             "order": req.query.order,
            });
        res.status(200).send(`Created record ${record.id}`)
    } else {
        res.status(400).send(`Couldn't create record.`)
    }
}