const pool = require('../db');

const getAdmins = async (req, res) => {
    return pool.query("SELECT * FROM admin ORDER BY id");
};

const getTeachers = async (req, res) => {
    return pool.query("SELECT * FROM teacher ORDER BY id");
}

const getStudents = async (req, res) => {
    return pool.query("SELECT * FROM student ORDER BY id");
}

const addAdmin = async ({username, password, role_id}) => {
    return pool.query("INSERT INTO admin (username, password, role_id) VALUES ($1, $2, $3)", [username, password, role_id]);
}

const addTeacher = async ({fname, lname, password, lesson, role_id}) => {
    return pool.query("INSERT INTO teacher (fname, lname, password, lesson, role_id) VALUES ($1, $2, $3, $4, $5)", [fname, lname, password, lesson, role_id]);
}

const addStudent = async ({fname, lname, password, email, b_date, lesson, notes, role_id}) => {
    return pool.query("INSERT INTO student (fname, lname, password, email, b_date, lesson, notes, role_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [fname, lname, password, email, b_date, lesson, notes, role_id]);
}

const deleteAdmin = async (id) => {
    return pool.query("DELETE FROM admin WHERE id = $1", [id])
}

const deleteTeacher = async (id) => {
    return pool.query("DELETE FROM teacher WHERE id = $1", [id])
}

const deleteStudent = async (id) => {
    return pool.query("DELETE FROM student WHERE id = $1", [id])
}

const updateAdmin = async ({username, password, role_id, id}) => {
    return pool.query("UPDATE admin SET username = $1, password = $2, role_id = $3 WHERE id = $4", [username, password, role_id, parseInt(id)]);
}

const updateTeacher = async ({fname, lname, password, lesson, role_id, id}) => {
    return pool.query("UPDATE teacher SET fname = $1, lname = $2, password = $3, lesson = $4, role_id = $5 WHERE id = $6", [fname, lname, password, lesson, role_id, parseInt(id)]);
}

const updateStudent = async ({fname, lname, password, email, b_date, lesson, notes, role_id, id}) => {
    return pool.query("UPDATE student SET fname = $1, lname = $2, password = $3, email = $4, b_date = $5, lesson = $6, notes = $7, role_id = $8 WHERE id = $9", [fname, lname, password, email, b_date, lesson, notes, role_id, parseInt(id)]);
}
module.exports = {
    getAdmins,
    getTeachers,
    getStudents,
    addAdmin,
    addTeacher,
    addStudent,
    deleteAdmin,
    deleteTeacher,
    deleteStudent,
    updateAdmin,
    updateTeacher,
    updateStudent
}