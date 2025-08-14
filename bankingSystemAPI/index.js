const express = require('express');
const app = express();
app.use(express.json());

const PORT = 3002;


let accounts = [
  { accNo: 1, accName: "Alice", accType: "Savings", accBalance: 5000, accIsActive: true },
  { accNo: 2, accName: "Bob", accType: "Current", accBalance: 12000, accIsActive: true },
  { accNo: 3, accName: "Charlie", accType: "Savings", accBalance: 3000, accIsActive: false },
  { accNo: 4, accName: "David", accType: "Current", accBalance: 8000, accIsActive: true },
  { accNo: 5, accName: "Eva", accType: "Savings", accBalance: 1500, accIsActive: false },
  { accNo: 6, accName: "Frank", accType: "Current", accBalance: 9500, accIsActive: true },
  { accNo: 7, accName: "Grace", accType: "Savings", accBalance: 4000, accIsActive: true },
  { accNo: 8, accName: "Hank", accType: "Current", accBalance: 11000, accIsActive: false },
  { accNo: 9, accName: "Ivy", accType: "Savings", accBalance: 2500, accIsActive: true },
  { accNo: 10, accName: "Jack", accType: "Current", accBalance: 7000, accIsActive: true }
];

app.get('/accounts', (req, res) => {
  res.json(accounts);
});


app.get('/accounts/summary', (req, res) => {
  const summary = {
    TotalAccounts: accounts.length,
    TotalBalance: accounts.reduce((sum, acc) => sum + acc.accBalance, 0),
    TotalActive: accounts.filter(acc => acc.accIsActive).length,
    TotalInactive: accounts.filter(acc => !acc.accIsActive).length,
    TotalSavings: accounts.filter(acc => acc.accType === "Savings").length,
    TotalCurrent: accounts.filter(acc => acc.accType === "Current").length
  };
  res.json(summary);
});



app.get('/accounts/inactive', (req, res) => {
  const inactiveAccounts = accounts.filter(account => account.accIsActive === false);

  if (inactiveAccounts.length === 0) {
    return res.status(404).json({ message: "No inactive accounts found" });
  }

  res.json(inactiveAccounts);
});


app.get('/accounts/:accNo', (req, res) => {
  const accNo = parseInt(req.params.accNo);
  const account = accounts.find(acc => acc.accNo === accNo);
  if (!account) {
    return res.status(404).json({ error: "Account not found" });
  }

  res.json(account);
});
app.delete('/accounts/inactive', (req, res) => {
  const countBefore = accounts.length;
  accounts = accounts.filter(acc => acc.accIsActive);
  const deletedCount = countBefore - accounts.length;
  res.json({ message: `${deletedCount} inactive accounts deleted` });
});

app.delete('/accounts/:accNo', (req, res) => {
  const accNo = parseInt(req.params.accNo);
  const initialLength = accounts.length;
  accounts = accounts.filter(acc => acc.accNo !== accNo);
  initialLength === accounts.length
    ? res.status(404).json({ error: "Account not found" })
    : res.json({ message: "Account deleted" });
});

app.delete('/accounts/inactive', (req, res) => {
  const countBefore = accounts.length;
  accounts = accounts.filter(acc => acc.accIsActive);
  const deletedCount = countBefore - accounts.length;
  res.json({ message: `${deletedCount} inactive accounts deleted` });
});

app.post('/accounts', (req, res) => {
  const newAcc = req.body;
  if (!newAcc.accNo || !newAcc.accName || !newAcc.accType || newAcc.accBalance === undefined || newAcc.accIsActive === undefined) {
    return res.status(400).json({ error: "Missing account fields" });
  }
  accounts.push(newAcc);
  res.status(201).json({ message: "Account added", account: newAcc });
});


app.put('/accounts/:accNo/balance', (req, res) => {
  const accNo = parseInt(req.params.accNo);
  const { accBalance } = req.body;
  const account = accounts.find(acc => acc.accNo === accNo);
  if (!account) return res.status(404).json({ error: "Account not found" });
  account.accBalance = accBalance;
  res.json({ message: "Balance updated", account });
});


app.listen(PORT, () => {
  console.log(`BankingSystemAPI running at http://localhost:${PORT}`);
}); 
