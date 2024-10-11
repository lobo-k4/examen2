const Link = require("../model/Link")

async function getLinks(req, res) {
    const links = await Link.find()
    res.json(links)
}

async function createLink(req, res) {
    const link = req.body // informacion que llega desde el cliente
    const temp =  await Link.create(link);
    res.json(temp)
}

async function updateLinkById(req, res) {
    const id = req.params.linkId
    const link = req.body

    await Link.findByIdAndUpdate(id, link)

    res.json({
        message: "link updated successfully!",
        data: link
    })
}

async function deleteLinkById(req, res) {
    const id = req.params.linkId
    await Link.findByIdAndDelete(id)
    
    res.json({
        message: "link deleted successfully!"
    })
}


module.exports = {
    getLinks,
    createLink,
    updateLinkById,
    deleteLinkById
}