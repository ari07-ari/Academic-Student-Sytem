const sequelize = require('../config/connection');
const { User, Courses, Program, Student, Program_Courses } = require('../models');

const userData = require('./userData.json');
const programData = require('./program.json');
const courseData = require('./courses.json');
const studentData = require('./student.json');
const program_coursesData = require('./program_courses.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const program of programData) {
    await Program.create({
      ...program,
    });
  }

  for (const courses of courseData) {
    await Courses.create({
      ...courses,
    });
  }

  for (const student of studentData) {
    await Student.create({
      ...student,
    });
  }

  
  for (const program_courses of program_coursesData) {
    await Program_Courses.create({
      ...program_courses,
    });
  }
  process.exit(0);
};

seedDatabase();
