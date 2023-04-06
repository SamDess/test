const AirtablePlus = require("airtable-plus")

const airtable = new AirtablePlus({
    baseID: 'app4mnOxWV48wdZGV',
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: "Table 1"
})

export default async (req, res) => {
    if (req.query.name) {
        const record = await airtable.create({ Name: req.query.name });
        res.status(200).send(`Created record ${record.id}`)
    } else {
        res.status(400).send(`Couldn't create record.`)
    }
}