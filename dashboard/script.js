const data = [
    {
        "courseName": "Acceleration",
        "imageSrc": "/dashboard/imageMask.png",
        "favourite": true,
        "category": "Physics",
        "grade": 7,
        "plus": 2,
        "units": 4,
        "lessons": 18,
        "topics": 24,
        "classOption": "Mr. Frank's Class A",
        "students": 50,
        "startDate": "21-Jan-2020",
        "endDate": "21-Aug-2020",
        "preview":true,
        "manage":true,
        "submission":true,
        "report":true
    },
    {
        "courseName": "Displacement, Velocity and Speed",
        "imageSrc": "/dashboard/imageMask-1.png",
        "favourite": false,
        "category": "Physics - 2",
        "grade": 6,
        "plus": 3,
        "units": 2,
        "lessons": 15,
        "topics": 20,
        "preview":true,
        "manage":false,
        "submission":false,
        "report":true
    },
    {
        "courseName": "Introduction to Biology: Micro organisms and how they affect...",
        "imageSrc": "/dashboard/imageMask-2.png",
        "favourite": true,
        "category": "Biology",
        "grade": 4,
        "plus": 1,
        "units": 5,
        "lessons": 16,
        "topics": 22,
        "classOption": "All Classes",
        "students": 300,
        "preview":true,
        "manage":false,
        "submission":false,
        "report":true
    },
    {
        "courseName": "Introduction to High School Mathematics",
        "imageSrc": "/dashboard/imageMask-3.png",
        "favourite": true,
        "category": "Mathematics",
        "grade": 8,
        "plus": 3,
        "classOption": "Mr. Frank's Class B",
        "students": 44,
        "startDate": "14-Oct-2019",
        "endDate": "20-Oct-2020",
        "preview":true,
        "manage":true,
        "submission":true,
        "report":true
    }
]

const selectoptions = [
    "Mr. Frank's Class A","Mr. Frank's Class B","All Classes"
]


const previewicon = "/dashboard/preview.svg"
const courseicon = "/dashboard/manage course.svg"
const submissionicon = "/dashboard/grade submissions.svg"
const reporticon = "/dashboard/reports.svg"
const favourite = "/dashboard/favourite.svg"


function createCourseCard(coursedata) {

    let coursegrid = document.querySelector('.courses-grid');

    let course = document.createElement('div');
    course.classList.add('course');
    course.innerHTML = `
    <div class="course-card">
        <div class="course">
            <img src="${coursedata.imageSrc}" alt="" class="course-img">
            <div class="courses-details">
                <div class="line-1">
                    <div class="course-name">${coursedata.courseName}</div> <svg id="favourite" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path id="Path_3678" data-name="Path 3678" d="M0,0H24V24H0Z" fill="none"/>
                    <path id="Path_3679" data-name="Path 3679" d="M12,17.27,18.18,21l-1.64-7.03L22,9.24l-7.19-.61L12,2,9.19,8.63,2,9.24l5.46,4.73L5.82,21Z" fill="${coursedata.favourite?`#edc900`:`#eeeeee`}"/>
                    <path id="Path_3680" data-name="Path 3680" d="M0,0H24V24H0Z" fill="none"/>
                  </svg>
                </div>
                <div class="line-2 regular-course-label">
                    ${coursedata.category}
                    <div class="pipe">|</div>
                    Grade
                    <div class="grade">${coursedata.grade}</div>
                    <div class="plus">+${coursedata.plus}</div>
                </div>
                ${coursedata.units || coursedata.lessons || coursedata.topics ? 
                `<div class="line-3 regular-course-label">
                    ${coursedata.units ? `<div class="number-line-2">4</div>Units`:``}
                    ${coursedata.lessons ? `<div class="number-line-2 lm">18</div>Lessons`:``}
                    ${coursedata.topics ? `<div class="number-line-2 lm">24</div>Topics`:``}
                </div>` : ``}
                <select class="course-class-input">
                    ${coursedata.classOption ? `` : `<option value="" class="no-class-selected">Select Class</option>`}
                    ${selectoptions.map(option => `<option value="${option}" ${coursedata.classOption && coursedata.classOption.includes(option) ? 'selected' : ''}>${option}</option>`).join('')}
                </select>
                ${coursedata.students || coursedata.startDate || coursedata.endDate ?
                `<div class="line-4 regular-course-label">
                    ${coursedata.students?`<div>${coursedata.students} Students</div>`:``}
                    ${(coursedata.startDate && coursedata.students)?`<div class="pipe">|</div>`:``}
                    ${coursedata.startDate?`<div>${coursedata.startDate}</div>`:``}
                    ${(coursedata.startDate || coursedata.endDate)?`<div class="pipe">-</div>`:``}
                    ${coursedata.endDate?`<div>${coursedata.endDate}</div>`:``}
                </div>`:``}
            </div>
        </div>
        <div class="courses-icons">
            <img class="${coursedata.preview?``:`low-opacity`}" src="${previewicon}" alt="">
            <img class="${coursedata.manage?``:`low-opacity`}" src="${courseicon}" alt="">
            <img class="${coursedata.submission?``:`low-opacity`}" src="${submissionicon}" alt="">
            <img class="${coursedata.report?``:`low-opacity`}" src="${reporticon}" alt="">
        </div>
    </div>`;

    coursegrid.appendChild(course);
    
    

}

data.forEach(function (c) {
    createCourseCard(c);
});
