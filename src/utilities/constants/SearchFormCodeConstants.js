export const configFileSampleCode = `const searchFormConfigurations = {
    searchFormFields: {
        name: {label: "Name", type: "text"},
        dateOfBirth: {label: "Date of Birth", type: "date"},
        yearLevel: {label: "Year Level", 
                    type: {dropdown: [
                        {label: "Freshman", value: 1},
                        {label: "Sophomore", value: 2},
                        {label: "Junior", value: 3},
                        {label: "Senior", value: 4},
                    ]
        }
    },
   
    searchGridColumns: [
        {name: "studentID", title: ""},
        {name: "name", title: "Name"},
        {name: "dateOfBirth", title: "Date of Birth"},
        {name: "yearLevel", title: "Year Level"},
        {name: "attendanceHistory", title: "Attendance History"},
        {name: "gradesDropdown", title: "Grades"},
        {name: "transcript", title: "Transcript"},
        {name: "activities", title: "Activities"},
    ]
   }
}
`;

export const implementingComponentSampleCode = `<SearchFormComponent
    //Required
    config = {searchFormConfigurations}
        
    //Optional
    tabToOpen = {this.openTab}
/>    
`;

export const searchFormFieldsCode = `searchFormFields: {
    name: {label: "Name", type: "text"},
    dateOfBirth: {label: "Date of Birth", type: "date"},
    yearLevel: {
        label: "Year Level",
        type: {
            dropdown: [
                {label: "Freshman", value: 1}
                {label: "Sophomore", value: 2}
                {label: "Junior", value: 3}
                {label: "Senior", value: 4}
            ]
        }
    }
}`;

export const searchFormDefaultSampleCode = `searchFormDefaultValues: {
  collegeYear: 1
}`;

export const searchFormColumnCountSampleCode = `searchFormFieldsColumnCount: 3`;

export const searchFormFieldContainerSampleCode = `searchFormFieldsContainerWidth: '630px'`

export const searchMenuOptionsSampleCode = `searchMenuOptions: [
  {
      key: "generateStudent", title: "Generate Student Report", image: pdf,
      dependsOnRowSelection: true,
      action: "downloadFile",
      onClickHandler: this.generateStudentReport
  }, 
  {
      key: "actions", title: "Actions", image: actions,
      subMenuItems: [
          {
              key: "multipleStudentInfoUpdate",
              title: "Multiple Student Info Update",
              image: batchAdd,
              action: "openPopup",
              popupHeader: "Multiple Student Info Update",
              popupContent: this.getMultipleStudentInfoUpdateForm,
              dependsOnRowSelection: true
          },
          {key: "createNewStudent", title: "Create New Student", image: create},
          {key: "deleteStudent", title: "Delete Student", image: delete},
          {
              key: "extracurricularActivities",
              title: "Manage Extracurricular Activities", image: manage,
              subMenuItems: [
                  {key: "addNewActivity", title: "Add New Activity", image: create},
                  {key: "deleteNewActivity", title: "Delete Activity", image: delete},
              ]
          },
      ]
  }
]`;

export const reducerIDSampleCode = `reducerID: ["students", "info"]`;

export const reducerSearchIDSampleCode = `searchID: "studentID"`;

export const searchColumnSampleCode = `searchGridColumns: [
    {name: "studentID", title: ""},
    {name: "name", title: "Name"},xx
    {name: "dateOfBirth", title: "Date of Birth"},
    {name: "yearLevel", title: "Year Level"},
    {name: "attendanceHistory", title: "Attendance History"},
    {name: "gradesDropdown", title: "Grades"},
    {name: "transcript", title: "Transcript"},
    {name: "activities", title: "Activities"},
]`;

export const searchGridColumnWidthsSampleCode = `searchGridColumnWidths: {
    //studentID is a hidden column so width is not needed
    name: 250,
    yearLevel: 50,
    attendanceHistory: 100,
    gradesDropdown: 50,
    transcript: 100,
    //dateOfBirth and activities defaults to 180
}`;

export const searchGridHiddenColumnsSampleCode = `searchGridHiddenColumns: ["studentID"]`;

export const searchGridWidthSampleCode = `searchGridWidth: '1500px'`;

export const searchFormTableCellConfigSampleCode = `tableCellConfig: {
    transcript: {
        action: "downloadFile",
        onClickHandler: this.downloadTranscript
    },
    attendance: {
        action: "openPopup",
        popupHeader: "Attendance History",
        popupContent: this.getAttendanceHistoryContent,
        popupClassName: "attendanceHistory"
    },
    gradesDropdown: {
        action: "openDropdown",
        dropdownOptions: [
            {
                key: "viewCurrentGrades",
                title: "View Current Grades",
                image: cross,
                action: "transferTab",
                targetTab: "viewGradesTab"
            },
            {
                key: "getGradesReport", title: "Generate Grades Report", image: pdf,
                action: "downloadFile",
                onClickHandler: this.generateGradesReport
            },
        ]
    },
    activities: {action: "transferTab", targetTab: "View Student Activities"}
}`;