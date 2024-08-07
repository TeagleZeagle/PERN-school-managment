const pool = require("../db");
const adminModel = require("../model/adminModel");
const jwt = require("jsonwebtoken");

const authenticateAdmin = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await adminModel.authenticateAdmin(username, password);
        if (user) {
            const token = jwt.sign({
                username: user.username,
                role: user.role_id
            }, '9a78cd3ea8e4f710862a5ff757eabe16d78111a8e220280b76ba26bbd4d6db2d', {expiresIn: '1h'});
            res.status(200).json({status: true, access_token: token});
        } else {
            res.status(401).send("Invalid credentials");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred during login");
    }
};

const getAdminByUsername = async (req, res) => {
    try {
        const {username} = req.params;
        const admin = await adminModel.getAdminByUsername(username);
        if (admin) {
            res.status(200).json({user: admin})
        } else {
            res.status(404).json({message: 'Admin not found'});
        }
    } catch (err) {
        console.error('Error fetching admin by username:', err);
        res.status(500).json({message: 'Error fetching admin by username', error: err.message});
    }
};

const getAdmins = async (req, res) => {
    try {
        const getAdmins = await adminModel.getAdmins();
        res.status(200).json(getAdmins.rows);
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred while getting the admins");
    }
}

const getTeachers = async (req, res) => {
    try {
        const getTeachers = await adminModel.getTeachers();
        res.status(200).json(getTeachers.rows);
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred while getting the teachers");
    }
}

const getStudents = async (req, res) => {
    try {
        const getStudents = await adminModel.getStudents();
        res.status(200).json(getStudents.rows);
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred while getting the students");
    }
}

const getClasses = async (req, res) => {
    try {
        const getClasses = await adminModel.getClasses();
        res.status(200).json(getClasses.rows);
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred while getting the classes");
    }
}

const getClassAssignments = async (req, res) => {
    try {
        const getClassAssignments = await adminModel.getClassAssignments();
        res.status(200).json(getClassAssignments.rows);
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred while getting the class assignments");
    }
}

const addAdmin = async (req, res) => {
    try {
        const addAdmin = await adminModel.addAdmin(req.body);
        res.status(201).json(addAdmin);
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred while adding the admin");
    }
}

const addTeacher = async (req, res) => {
    try {
        const addTeacher = await adminModel.addTeacher(req.body);
        res.status(201).json(addTeacher);
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred while adding the teacher");
    }
}

const addStudent = async (req, res) => {
    try {
        const addStudent = await adminModel.addStudent(req.body);
        res.status(201).json(addStudent);
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred while adding the student");
    }
}

const addClass = async (req, res) => {
    try {
        const addClass = await adminModel.addClass(req.body);
        res.status(201).json(addClass);
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred while adding the class");
    }
}

const addClassAssignments = async (req, res) => {
    try {
        const addClassAssignments = await adminModel.addClassAssignments(req.body);
        res.status(201).json(addClassAssignments);
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred while adding the class assignments");
    }
}

const deleteAdmin = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const deleteAdmin = await adminModel.deleteAdmin(id)
        res.status(204).send(deleteAdmin);
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while deleting the admin");
    }
}

const deleteTeacher = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const deleteTeacher = await adminModel.deleteTeacher(id)
        res.status(204).send(deleteTeacher);
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while deleting the teacher");
    }
}

const deleteStudent = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const deleteStudent = await adminModel.deleteStudent(id)
        res.status(204).send(deleteStudent);
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while deleting the student");
    }
}

const deleteClass = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const deleteClass = await adminModel.deleteClass(id)
        res.status(204).send(deleteClass);
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while deleting the class");
    }
}

const deleteClassAssignments = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const deleteClassAssignments = await adminModel.deleteClassAssignments(id)
        res.status(204).send(deleteClassAssignments);
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while deleting the class assignments");
    }
}

const updateAdmin = async (req, res) => {
    try {
        const updateAdmin = await adminModel.updateAdmin(req.body);
        res.status(200).send(updateAdmin)
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while updating the admin");
    }
}

const updateTeacher = async (req, res) => {
    try {
        const updateTeacher = await adminModel.updateTeacher(req.body);
        res.status(200).send(updateTeacher)
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while updating the teacher");
    }
}

const updateStudent = async (req, res) => {
    try {
        const updateStudent = await adminModel.updateStudent(req.body);
        res.status(200).send(updateStudent)
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while updating the student");
    }
}

const updateClass = async (req, res) => {
    try {
        const updateClass = await adminModel.updateClass(req.body);
        res.status(200).send(updateClass)
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while updating the class");
    }
}

const updateClassAssignments = async (req, res) => {
    try {
        const updateClassAssignments = await adminModel.updateClassAssignments(req.body);
        res.status(200).send(updateClassAssignments)
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred while updating the class assignments");
    }
}

module.exports = {
    getAdmins,
    getTeachers,
    getStudents,
    getClasses,
    getClassAssignments,
    addAdmin,
    addTeacher,
    addStudent,
    addClass,
    addClassAssignments,
    deleteAdmin,
    deleteTeacher,
    deleteStudent,
    deleteClass,
    deleteClassAssignments,
    updateAdmin,
    updateTeacher,
    updateStudent,
    updateClass,
    updateClassAssignments,
    authenticateAdmin,
    getAdminByUsername
}