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

function calculateOvertimePay (rate, hours) {
    const overtimeHours = Math.max(hours - 40, 0);
    return overtimeHours * rate * 1.5; 
}

function calculateTaxes(grossPay) {
    return grossPay * 0.85;
}

function processPayroll (employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const netPay = calculateTaxes(grossPay);

    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}

console.log("Testing individual functions:");
console.log(calculateBasePay(63, 45));
console.log(calculateOvertimePay(63, 45));
console.log(calculateTaxes(2992.50));

console.log("Payroll Report:");

employees.forEach(employee => {
    console.log(processPayroll(employee));
});
