// frontend/script.js

const API_URL = 'http://localhost:8080/api/expenses';

// Load expenses when page loads
window.onload = loadExpenses;

// Fetch and display all expenses
async function loadExpenses() {
  try {
    const response = await fetch(API_URL);
    const expenses = await response.json();
    renderExpenses(expenses);
  } catch (error) {
    console.error("Failed to load expenses:", error);
    alert("Could not connect to backend. Is Spring Boot running?");
  }
}

// Render expenses to the DOM
function renderExpenses(expenses) {
  const list = document.getElementById('expenseList');
  list.innerHTML = ''; // Clear current list

  expenses.forEach(exp => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>
        <strong>${exp.description}</strong> - 
        ₹${exp.amount} 
        <em>(${exp.category})</em> 
        on ${new Date(exp.date).toLocaleDateString()}
      </span>
      <button onclick="deleteExpense(${exp.id})">🗑️ Delete</button>
    `;
    list.appendChild(li);
  });
}

// Handle form submission
document.getElementById('expenseForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const expense = {
    description: form.description.value,
    amount: parseFloat(form.amount.value),
    category: form.category.value,
    date: form.date.value
  };

  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expense)
    });

    form.reset();
    loadExpenses(); // Refresh list
  } catch (error) {
    console.error("Error adding expense:", error);
  }
});

// Delete an expense
async function deleteExpense(id) {
  if (!confirm("Delete this expense?")) return;

  try {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadExpenses(); // Refresh list
  } catch (error) {
    console.error("Error deleting expense:", error);
  }
}