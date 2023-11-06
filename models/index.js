const User = require('./User');
const Courses = require('./Courses');
const Program = require('./Program');
const Student = require('./Student');
const Program_Courses = require('./Program_Courses');

Program.belongsTo(Student, {
  foreignKey: 'student_id'
});

Student.hasMany(Courses, {
  foreignKey: 'courses_id',
  onDelete: 'CASCADE'
});

Program.hasMany(Courses, {
  foreignKey: 'courses_id',
  onDelete: 'CASCADE'
});

Courses.belongsTo(Program, {
  foreignKey: 'program_id'
});

Courses.belongsTo(Student, {
  foreignKey: 'student_id'
});

// Program.hasMany(Student, {
//   foreignKey: 'student_id',
//   // onDelete: 'CASCADE'
// });


module.exports = { User, Courses, Program, Student, Program_Courses };
