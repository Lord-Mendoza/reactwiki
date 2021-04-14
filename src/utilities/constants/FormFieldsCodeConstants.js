export const formFieldsSampleCode = `<FormFieldsComponent
    //Required Ones
    formFields = {
        name: {label: "Name", type: "text"},
        dateOfBirth: {label: "Date of Birth", type: "date"},
        collegeYear: {
            label: "College Year",
            type: {
                dropdown: [
                    {label: "Freshman", value: 1}
                    {label: "Sophomore", value: 2}
                    {label: "Junior", value: 3}
                    {label: "Senior", value: 4}
                ]
            }
        },
        studentID: {
            label: "Student ID",
            type: {
                lookupValue: {
                    searchFormFields: {
                        name: {label: "Name", type: "text"},
                        dateOfBirth: {label: "Date of Birth", type: "date"},
                    },
                    searchGridColumns: {
                         {name: "studentID", title: ""},
                         {name: "name", title: "Name"},
                         {name: "dateOfBirth", title: "Date of Birth"},
                    },
                    additionalFieldsToPopulate: ["name", "dateOfBirth"],
                    
                    reducerID: ["students", "info"],
                    searchID: "studentID",
                    searchHandler: this.getStudentSearchResults,
                    
                    popupClassName: "studentSearchLookupPopup"
                }
            }
        }
    },
    formFieldsData = {
        name: "John",
        dateOfBirth: "11/19/1983",
        collegeYear: "1",
        extracurricularActivities: ["baseball", "soccer", "chess"]
    },
    handlerFunction={this.state.handleFormFieldValue},

    //Optional Ones
    requiredFields = {["Name", "Date of Birth"]},
    columnCount={3},
    fieldContainerWidth = {'630px'}
    formClassName={'studentInfo'}
/>
`;

export const formFieldsCode = `formFields = {
    name: {label: "Name", type: "text"},
    dateOfBirth: {label: "Date of Birth", type: "date"},
    collegeYear: {
        label: "College Year",
        type: {
            dropdown: [
                {label: "Freshman", value: 1}
                {label: "Sophomore", value: 2}
                {label: "Junior", value: 3}
                {label: "Senior", value: 4}
            ]
        }
    },
    studentID: {
        label: "Student ID",
        type: {
            lookupValue: {
                searchFormFields: {
                    name: {label: "Name", type: "text"},
                    dateOfBirth: {label: "Date of Birth", type: "date"},
                },
                searchGridColumns: {
                     {name: "studentID", title: ""},
                     {name: "name", title: "Name"},
                     {name: "dateOfBirth", title: "Date of Birth"},
                },
                additionalFieldsToPopulate: ["name", "dateOfBirth"],
                
                reducerID: ["students", "info"],
                searchID: "studentID",
                searchHandler: this.getStudentSearchResults,
                
                popupClassName: "studentSearchLookupPopup"
            }
        }
    }
}`

export const formFieldsDataCode = `formFieldsData = {
    name: "John",
    dateOfBirth: "11/19/1983",
    collegeYear: 1,
    extracurricularActivities: ["baseball", "soccer", "chess"]
}`;

export const formFieldsHandlerCode = `handlerFunction={this.state.handleFormFieldValue}`;
export const requiredFieldsCode = `requiredFields = {["Name", "Date of Birth"]}`;
export const fieldContainerWidthCode = `fieldContainerWidth = {'630px'}`
