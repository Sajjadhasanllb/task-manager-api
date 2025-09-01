const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const auth = require('../middleware/auth');

// This handles GET /api/tasks and POST /api/tasks
router.route('/')
    .get(auth, getTasks)
    .post(auth, createTask);

// This handles PUT /api/tasks/:id and DELETE /api/tasks/:id
router.route('/:id') // <-- Pay close attention to this line
    .put(auth, updateTask)
    .delete(auth, deleteTask);

module.exports = router;