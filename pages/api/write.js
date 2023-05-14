const AirtablePlus = require("airtable-plus")

const airtable = new AirtablePlus({
    baseID: 'app4mnOxWV48wdZGV',
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: "Table 1",
    camelCase: true,
    transform: r => {
        r.fields.id = r.id
        delete r.id
        return r.fields
    }
})

export default async ({ name, quantityOld, quantityRemoved }, res) => {
    const data = await airtable.updateWhere(`Name = "${name}"`, { quantity: quantityOld-quantityRemoved });
    res.json(data)
}
