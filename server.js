const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', './view');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const todoList = [];
app.get('/add', (req, res) => {
    return res.render('add');
});
app.post('/add', (req, res) => {
    const { title } = req.body;
    const id = Math.floor(Math.random() * 1000);
    if(title === ""){
        return res.redirect('/')
    }
    todoList.push({
        id,       
        title,
    });
    return res.redirect('/');
});

app.get('/', (req, res) => {
  res.render("page",{data:todoList});
});

app.post('/delete/:id', (req, res) => {
    const { id } = req.params;
    const index = todoList.findIndex(post => post.id == id);
    todoList.splice(index, 1);
    return res.redirect('/');
});

app.get('/update/:id', (req, res) => {
    const { id } = req.params;
    const post = todoList.find(post => post.id == id);
    return res.render('update', {
        post,
    });
});

app.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const index = todoList.findIndex(post => post.id == id);
    todoList[index] = {
        id,
        title,
        
    };
    
    return res.redirect('/');
});
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});


