// Get the query parameters from the URL (e.g., ?username=student1)
const queryParams = new URLSearchParams(window.location.search);
const username = queryParams.get('username');

// Hardcoded student data (in a real app, this would come from a database)
var students = {
    'student1': {
        username:'SOUDAGER ABRAR UL HUQ ',
        attendance:'37',
        sub1:'logical algorithm and Calcus',
        sub2:'chemistry',
        sub3:'EDC',
        sub4:'CE',
        marks1:'37',
        marks2:'53',
        marks3:'97',
        marks4:'45',
        grp:'CSE-IIIA',
        rollNo:'22FH5**8',
        cont:'93900***99',
        addr:'SREE RAM , KURNOOL',
        reci:'DAY-SCHOLAR',
        fee:'no due',
        stats:'p',


    }
    ,'student2': {
        rollNo: '102',
        examResults: 'B',
        attendance: '85%'
    }
};

// Check if the student 
if (students[username]) {
    const student = students[username];
    //if user exists
    document.getElementById('username').textContent= students.username;
    document.getElementById('attendance').textContent=students.attendance;
    document.getElementById('subject1').textContent=students.sub1;
    document.getElementById('subject2').textContent=students.sub2;
    document.getElementById('subject3').textContent=students.sub3;
    document.getElementById('subject4').textContent=students.sub4;
    document.getElementById('Marks1').textContent=students.marks1;
    document.getElementById('Marks2').textContent=students.marks2;
    document.getElementById('Marks3').textContent=students.marks3;
    document.getElementById('Marks4').textContent=students.marks4;
    document.getElementById('status').textContent=students.stats;
    document.getElementById('course').textContent=students.grp;
    document.getElementById('number').textContent=students.rollNo;
    document.getElementById('contact').textContent=students.cont;
    document.getElementById('residency').textContent=students.reci;
    document.getElementById('address').textContent=students.addr;
    document.getElementById('fee-due').textContent=students.fee;
} else {
    // If no student is found, display a message
    document.body.innerHTML = '<h2>No student found with the given username.</h2>';
  }