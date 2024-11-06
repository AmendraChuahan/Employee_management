
    const  employees = [
      {
        "id": "E001",
        "password": "123",
        "email": "employee1@example.com",
        "tasks": [
          {
            "title": "Task 1",
            "description": "Complete the quarterly report",
            "taskDate": "2024-10-25",
            "category": "Reporting",
            "active": true,
            "newTask": false,
            "complete": false,
            "failed": false
          },
          {
            "title": "Task 2",
            "description": "Prepare presentation slides",
            "taskDate": "2024-10-28",
            "category": "Presentation",
            "active": false,
            "newTask": false,
            "complete": true,
            "failed": false
          },
          {
            "title": "Task 3",
            "description": "Update client records",
            "taskDate": "2024-10-26",
            "category": "Data Entry",
            "active": true,
            "newTask": true,
            "complete": false,
            "failed": false
          }
        ]
      },
      {
        "id": "E002",
        "password": "123",
        "email": "employee2@example.com",
        "tasks": [
          {
            "title": "Task 1",
            "description": "Audit financial records",
            "taskDate": "2024-10-30",
            "category": "Finance",
            "active": true,
            "newTask": true,
            "complete": false,
            "failed": false
          },
          {
            "title": "Task 2",
            "description": "Conduct team meeting",
            "taskDate": "2024-10-29",
            "category": "Management",
            "active": false,
            "newTask": false,
            "complete": true,
            "failed": false
          }
        ]
      },
      {
        "id": "E003",
        "password": "123",
        "email": "employee3@example.com",
        "tasks": [
          {
            "title": "Task 1",
            "description": "Review project requirements",
            "taskDate": "2024-11-01",
            "category": "Project Management",
            "active": true,
            "newTask": true,
            "complete": false,
            "failed": false
          },
          {
            "title": "Task 2",
            "description": "Document user feedback",
            "taskDate": "2024-10-27",
            "category": "Documentation",
            "active": false,
            "newTask": false,
            "complete": true,
            "failed": false
          },
          {
            "title": "Task 3",
            "description": "Optimize database queries",
            "taskDate": "2024-10-29",
            "category": "Development",
            "active": true,
            "newTask": false,
            "complete": false,
            "failed": true
          }
        ]
      },
      {
        "id": "E004",
        "password": "123",
        "email": "employee4@example.com",
        "tasks": [
          {
            "title": "Task 1",
            "description": "Design marketing banner",
            "taskDate": "2024-10-28",
            "category": "Design",
            "active": true,
            "newTask": false,
            "complete": false,
            "failed": false
          },
          {
            "title": "Task 2",
            "description": "Coordinate product launch",
            "taskDate": "2024-10-30",
            "category": "Coordination",
            "active": false,
            "newTask": true,
            "complete": true,
            "failed": false
          }
        ]
      },
      {
        "id": "E005",
        "password": "123",
        "email": "employee5@example.com",
        "tasks": [
          {
            "title": "Task 1",
            "description": "Prepare monthly sales report",
            "taskDate": "2024-10-31",
            "category": "Sales",
            "active": true,
            "newTask": false,
            "complete": false,
            "failed": false
          },
          {
            "title": "Task 2",
            "description": "Resolve customer complaints",
            "taskDate": "2024-10-28",
            "category": "Support",
            "active": false,
            "newTask": true,
            "complete": true,
            "failed": false
          },
          {
            "title": "Task 3",
            "description": "Implement website updates",
            "taskDate": "2024-10-29",
            "category": "Development",
            "active": true,
            "newTask": false,
            "complete": false,
            "failed": true
          }
        ]
      }
    ];

    const admin= [{
      "id": "A001",
      "password": "123",
      "email": "admin@example.com"
    }];
    export const setLocalStorage = ()=>{
        localStorage.setItem('employees',JSON.stringify(employees))
        localStorage.setItem('admin',JSON.stringify(admin))

    }
    export const getLocalStorage = ()=>{
        
    }
  
  