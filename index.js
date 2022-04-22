const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello from Over own2 Smarty Smarty Node')
// });
const users = [
    { id: 1, name: 'sabana', email: 'sab@gmail.com', phone: '017865736884' },
    { id: 2, name: 'sabnur', email: 'sabnur@gmail.com', phone: '01785433388' },
    { id: 3, name: 'alim', email: 'alim@gmail.com', phone: '01575712343' },
    { id: 4, name: 'halim', email: 'halim@gmail.com', phone: '01794794263' },
    { id: 5, name: 'monir', email: 'monir@gmail.com', phone: '0197562376125' },
    { id: 6, name: 'foysal', email: 'foysal@gmail.com', phone: '01272849223' },
    { id: 7, name: 'arnob', email: 'aronob@gmail.com', phone: '01852156223' }
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);

    }
    else {
        res.send(users);
    }
})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    users.push(user);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('req body :', req.body);
    const user = req.body;
    user.id = users.length + 1;
    res.send()
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'lichi', 'jackfruit', 'apple', 'oranges', 'dragon fruit'])
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour ')
})

app.listen(port, () => {
    console.log('Listening port', port)
})