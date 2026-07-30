/**
 * Part 1: File Operations (fileOperations.js)
 * Demonstrating Sync vs Async operations, CRUD on File System, and Error Handling.
 */

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "students.json");

// Sample Student Data
const initialStudents = [
    { id: 1, name: "Ahmed Ali", age: 21, course: "Node.js" },
    { id: 2, name: "Haneen Zarifa", age: 22, course: "MongoDB" }
];

// ==========================================
// 1. Synchronous vs Asynchronous Explanation
// ==========================================
/*
  DIFFERENCE EXPLANATION:
  - Synchronous Operations (e.g., readFileSync, writeFileSync):
    Block the Execution Thread. Node.js waits until the file read/write finishes 
    before executing the next line of code. Ideal for initial configuration loads.

  - Asynchronous Operations (e.g., readFile, writeFile):
    Non-blocking. Node.js delegates the operation to libuv thread pool and continues 
    executing the rest of the script. Triggers callbacks/promises upon completion. 
    Best for scalable backend servers.
*/

// ==========================================
// 2. Sync Operations
// ==========================================

// Write Students (Sync)
function writeStudentsSync(data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
        console.log("🟢 [Sync] File initialized successfully.");
    } catch (error) {
        console.error("🔴 [Sync Write Error]:", error.message);
    }
}

// Read Students (Sync)
function readStudentsSync() {
    try {
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("🔴 [Sync Read Error]:", error.message);
        return [];
    }
}

// Initialize File
writeStudentsSync(initialStudents);

// ==========================================
// 3. Async Operations (Callbacks & CRUD)
// ==========================================

// Read Students (Async Callback)
function readStudentsAsync(callback) {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            return callback(err, null);
        }
        try {
            const students = JSON.parse(data);
            callback(null, students);
        } catch (parseErr) {
            callback(parseErr, null);
        }
    });
}

// Add Student (Async Callback)
function addStudentAsync(newStudent, callback) {
    readStudentsAsync((err, students) => {
        if (err) return callback(err);

        students.push(newStudent);
        fs.writeFile(filePath, JSON.stringify(students, null, 2), (writeErr) => {
            if (writeErr) return callback(writeErr);
            callback(null, "Student added successfully!");
        });
    });
}

// BONUS: Update Student Course (Async Callback)
function updateStudentCourseAsync(id, newCourse, callback) {
    readStudentsAsync((err, students) => {
        if (err) return callback(err);

        const student = students.find((s) => s.id === id);
        if (!student) {
            return callback(new Error("Student not found"));
        }

        student.course = newCourse;
        fs.writeFile(filePath, JSON.stringify(students, null, 2), (writeErr) => {
            if (writeErr) return callback(writeErr);
            callback(null, "Student course updated successfully!");
        });
    });
}

// BONUS: Delete Student (Async Callback)
function deleteStudentAsync(id, callback) {
    readStudentsAsync((err, students) => {
        if (err) return callback(err);

        const filteredStudents = students.filter((s) => s.id !== id);
        if (students.length === filteredStudents.length) {
            return callback(new Error("Student not found"));
        }

        fs.writeFile(filePath, JSON.stringify(filteredStudents, null, 2), (writeErr) => {
            if (writeErr) return callback(writeErr);
            callback(null, "Student deleted successfully!");
        });
    });
}

// Testing Async Functions
console.log("⏳ Testing Async Operations...");

addStudentAsync({ id: 3, name: "Mona Salem", age: 20, course: "Express.js" }, (err, res) => {
    if (err) console.error(err.message);
    else {
        console.log("🟢", res);
        updateStudentCourseAsync(1, "React.js", (updateErr, updateRes) => {
            if (updateErr) console.error(updateErr.message);
            else console.log("🟢", updateRes);
        });
    }
});