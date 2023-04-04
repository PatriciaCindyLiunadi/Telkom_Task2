const company = {
    marketing: [
      {
        name: "Budi",
        salary: 5000000,
      },
      {
        name: "Agus",
        salary: 4500000,
      },
    ],
    engineer: {
      frontend: [
        {
          name: "Suci",
          salary: 8500000,
        },
        {
          name: "Lukito",
          salary: 7000000,
        },
      ],
      backend: [
        {
          name: "Bustomi",
          salary: 9500000,
        },
      ],
      devops: [
        {
          name: "Paul",
          salary: 9000000,
        },
      ],
    },
  };
  
  function calculateTotalSalary(obj) {
    let totalSalary = 0;
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        for (let i = 0; i < obj[key].length; i++) {
          totalSalary += obj[key][i].salary;
        }
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        totalSalary += calculateTotalSalary(obj[key]);
      }
    }
    return totalSalary;
  }
  
  console.log(calculateTotalSalary(company));
  