const db = require("../config/db");

// Get categories
exports.getCategories = (req, res) => {
  db.query("SELECT * FROM categories", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// Get questions by category name
exports.getQuestions = (req, res) => {
  const category = req.params.category;

  const query = `
    SELECT q.id, q.question, q.option1, q.option2, q.option3, q.option4
    FROM questions q
    JOIN categories c ON q.category_id = c.id
    WHERE c.name = ?
  `;

  db.query(query, [category], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// Submit answers and calculate score
exports.submitQuiz = (req, res) => {
  const { name, category, answers } = req.body;

  const ids = Object.keys(answers);

  if (ids.length === 0) {
    return res.status(400).send("No answers submitted");
  }

  const query = `SELECT id, answer FROM questions WHERE id IN (${ids.join(",")})`;

  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);

    let score = 0;

    results.forEach(q => {
      if (answers[q.id] === q.answer) {
        score++;
      }
    });

    const total = results.length;

    // Save result
    const insertQuery = `
      INSERT INTO results (name, category, score, total)
      VALUES (?, ?, ?, ?)
    `;

    db.query(insertQuery, [name, category, score, total]);

    res.json({ score, total });
  });
};