export function handleIndexController(req, res) {
    res.status(200).json({
        version: '1.0.0',
        developers: [
            'DanielCArce'
        ]
    })
}
export function handleIVersionController(req, res) {
    res.status().json({
        version: '1.0.0',
    })
}