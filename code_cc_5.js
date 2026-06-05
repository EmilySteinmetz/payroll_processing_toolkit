const employees = [
    { name: "Ariana Grande", hourlyRate: 63, hoursWorked: 45 },
    { name: "Tate McRae", hourlyRate: 35, hoursWorked: 25 },
    { name: "Olivia Rodrigo", hourlyRate: 40, hoursWorked: 15 },
    { name: "Sabrina Carpenter", hourlyRate: 60, hoursWorked: 35 }
];

function calculateBasePay (rate, hours) {
    const baseHours = Math.min(hours, 40);
    return rate * baseHours;
}
