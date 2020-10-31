export default async (req, res) => {
    const {method} = req;

    if(method === 'GET'){
        res.send('Hello');
    }
}