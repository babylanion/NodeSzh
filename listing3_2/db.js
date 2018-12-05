/*
 * @Author: mayi
 * @Date: 2018-12-02 22:36:44
 * @LastEditors: mayi
 * @LastEditTime: 2018-12-02 22:50:31
 * @Description: SQLite 进程内数据库
 */

 const sqlite3 = require('sqlite3').verbose();
 const dbName = 'later.sqlite';
 const db = new sqlite3.Database(dbName);

 db,serialize(() => {
     const sql = `
        CREATE TABLE IF NOT EXISTS articles
        (id integer primary key, title, content TEXT)
     `;
     db.run(sql);
 })

 class Article{
     static all(cb) {
         db.all('SELECT * FROM articles', cb);
     }

     static find(id, cb) {
         db.get('SELECT * FROM articles WHERE id = ?', id, cb);
     }

     static create(id, cb) {
        const sql = 'INSTER INTO articles(title, content) VALUES (?, ?)';
        db.run(sql, data.title, data.content, cb);
     }
     static delete(id, cb) {
         if(!id) return cb(new Error('Please provide an id'));
         db.run("DELTET FROM article WHERE id = ?", id, cb);
     }
 }

 module.exports = db;
 module.exports.Article = Article;
