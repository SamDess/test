const AirtablePlus = require("airtable-plus")

const airtable = new AirtablePlus({
    baseID: 'app4mnOxWV48wdZGV',
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: "Table 1",
    camelCase: true,
    transform: r => {
        delete r.id
        return r.fields
    }
})

export default async (req, res) => {
    const { store } = req.query
    const data = await airtable.read({
        filterByFormula: `type = "${store}"`
    });
    res.json(data)
}