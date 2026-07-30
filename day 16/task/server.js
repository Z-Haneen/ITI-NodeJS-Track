/**
 * Part 2: Native HTTP Server (server.js)
 * Built using ONLY native Node.js modules (http, fs, path).
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const filePath = path.join(__dirname, "students.json");

// Helper: Read Data Async (Promise)
const getStudentsData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) return reject(err);
            try {
                resolve(JSON.parse(data));
            } catch (e) {
                resolve([]);
            }
        });
    });
};

// Helper: Write Data Async (Promise)
const saveStudentsData = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
};

// Helper: Parse Request Body Async
const getRequestBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (err) {
                reject(err);
            }
        });
    });
};

// Create Server
const server = http.createServer(async (req, res) => {
    // Utility for JSON Response
    const sendResponse = (statusCode, data) => {
        res.writeHead(statusCode, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
    };

    const urlParts = req.url.split("/").filter(Boolean); // e.g., ["students", "1"]
    const method = req.method;

    try {
        // 1. GET / -> Welcome Message
        if (method === "GET" && req.url === "/") {
            return sendResponse(200, { message: "Welcome to Students Management API!" });
        }

        // 2. GET /students -> Return All Students
        if (method === "GET" && req.url === "/students") {
            const students = await getStudentsData();
            return sendResponse(200, students);
        }

        // 3. GET /students/:id -> Return Student by ID
        if (method === "GET" && urlParts[0] === "students" && urlParts.length === 2) {
            const studentId = parseInt(urlParts[1]);
            const students = await getStudentsData();
            const student = students.find((s) => s.id === studentId);

            if (!student) {
                return sendResponse(404, { message: "Student not found" });
            }
            return sendResponse(200, student);
        }

        // 4. POST /students -> Add Student
        if (method === "POST" && req.url === "/students") {
            try {
                const body = await getRequestBody(req);

                if (!body.name || !body.age || !body.course) {
                    return sendResponse(400, { message: "Invalid body: name, age, and course are required" });
                }

                const students = await getStudentsData();
                const newStudent = {
                    id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
                    name: body.name,
                    age: body.age,
                    course: body.course
                };

                students.push(newStudent);
                await saveStudentsData(students);

                return sendResponse(201, { message: "Student created successfully", student: newStudent });
            } catch (err) {
                return sendResponse(400, { message: "Invalid JSON format" });
            }
        }

        // 5. PUT /students/:id -> Update Student (Bonus)
        if (method === "PUT" && urlParts[0] === "students" && urlParts.length === 2) {
            const studentId = parseInt(urlParts[1]);
            try {
                const body = await getRequestBody(req);
                const students = await getStudentsData();
                const index = students.findIndex((s) => s.id === studentId);

                if (index === -1) {
                    return sendResponse(404, { message: "Student not found" });
                }

                students[index] = { ...students[index], ...body, id: studentId };
                await saveStudentsData(students);

                return sendResponse(200, { message: "Student updated successfully", student: students[index] });
            } catch (err) {
                return sendResponse(400, { message: "Invalid JSON format" });
            }
        }

        // 6. DELETE /students/:id -> Delete Student (Bonus)
        if (method === "DELETE" && urlParts[0] === "students" && urlParts.length === 2) {
            const studentId = parseInt(urlParts[1]);
            const students = await getStudentsData();
            const filteredStudents = students.filter((s) => s.id !== studentId);

            if (students.length === filteredStudents.length) {
                return sendResponse(404, { message: "Student not found" });
            }

            await saveStudentsData(filteredStudents);
            return sendResponse(200, { message: "Student deleted successfully" });
        }

        // 7. Invalid Routes -> 404
        sendResponse(404, { message: "Route Not Found" });

    } catch (error) {
        sendResponse(500, { message: "Internal Server Error", error: error.message });
    }
});

// Start Server
server.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});