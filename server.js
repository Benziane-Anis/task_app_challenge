const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', './view');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const todoList = [
    {
        id: 1,
        title: 'Task 1' ,
        completed: false,
    },

    
    
   
    
];
app.get('/add', (req, res) => {
    return res.render('add');
});
app.post('/add', (req, res) => {
    const { title } = req.body;
    const id = Math.floor(Math.random() * 1000);
    
    todoList.push({
        id,       
        title,
    });
    return res.redirect('/');
});

app.get('/', (req, res) => {
  res.render("page",{data:todoList});
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});


