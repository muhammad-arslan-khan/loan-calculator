const calculateLoan = async (req, res) => {
  const response = {
    amount: Number(req.body.amount),
    duration: Number(req.body.duration),
    monthlyInstallment: Math.floor(Math.random() * 2000),
  }

  setTimeout(() => {
    res.json(response)
  }, 1000)
}

module.exports = { calculateLoan }
