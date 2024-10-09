const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://mdshahnawazm17:0786%401234@cluster0.ucjqz7r.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    purchasedCourse: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }]
});

const User = mongoose.model('User', UserSchema);

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true, default: 9999 }
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    User,
    Course
};

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
