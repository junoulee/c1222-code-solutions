const express = require('express');
const app = express();
app.use(express.json());
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer',
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;

  const params = [gradeId];
  db.query(sql, params)
    .then((result) => {
      const grade = result.rows[0];
      if (!grade) {
        return res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`,
        });
      } else {
        return res.json(grade);
      }
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({
        error: 'An unexpected error occurred.',
      });
    });
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
`;
  db.query(sql)
    .then((result) => {
      const grade = result.rows;
      return res.json(grade);
    })

    .catch((err) => {
      console.error(err);
      return res.status(500).json({
        error: 'An unexpected error occurred.',
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const $score = Number(req.body.score);
  if (!req.body.name || !req.body.course || !$score) {
    return res.status(400).json({
      error: 'User must input name, course, and score.',
    });
  }
  if (!Number.isInteger($score) || $score < 0 || $score > 100) {
    return res.status(400).json({
      error: 'Score must be an integer between 0 to 100',
    });
  }

  const sql = `
    insert into grades ("name", "course", "score")
    values ($1, $2, $3)
      returning *
  `;
  const params = [req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then((result) => {
      const grade = req.body;
      return res.status(201).json(grade);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({
        error: 'An unexpected error occurred.',
      });
    });

});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId < 0) {
    return res.status(400).json({
      error: 'gradeId must be a positive integer',
    });
  }
  if (!req.body.name || !req.body.course || !req.body.score) {
    return res.status(400).json({
      error: 'User must input name, course, and score.',
    });
  }
  const sql = `
    update "grades"
       set "name" = $2,
           "course" = $3,
           "score" = $4
     where "gradeId" = $1
     returning *
  `;

  const params = [gradeId, req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then((result) => {
      const grade = result.rows[0];
      if (!grade) {
        return res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`,
        });
      } else {
        return res.json(grade);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.',
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId < 0) {
    return res.status(400).json({
      error: 'gradeId must be a positive integer',
    });
  }

  const sql = `
    delete
    from "grades"
    where "gradeId" = $1
    returning *
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then((result) => {
      const grade = result.rows[0];
      if (!grade) {
        return res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`,
        });
      }
      return res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.',
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
