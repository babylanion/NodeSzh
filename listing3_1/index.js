const express = require('express');
const app = express();
const articles = [{title: 'Example'}];

app.set('port', process.env.PORT || 3001);

/*
 * @获取所有文章
 */
app.get('/articles', (req, res) => {

    res.send(articles);
    console.log('获取')
})

/*
 * @创建一篇文章
 */
app.post('/articles', (req, res) => {

    res.send('OK');
})

/*
 * @获取定文章
 */
app.get('/articles/:id', (req, res) => {
    const id = req.params.id;
    console.log('Fetching:', id);
    res.send(articles[id]);
})

/*
 * @删除指定文章
 */
app.delete('/articles/:id', (req, res) => {
    const id = req.params.id;
    console.log('Deleting', id);
    delete articles[id];
    res.send({message: 'Deleted'});
})

app.listen(process.env.PORT || 3000);


module.exports = app;