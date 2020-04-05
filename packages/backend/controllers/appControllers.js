const calculateLoan = async (req, res) => {
  const { amount, duration } = req.body

  const response = {
    amount: Number(req.body.amount),
    duration: Number(req.body.duration),
    monthlyInstallment: ((amount / (duration * 12)) * 0.9).toFixed(2),
  }

  setTimeout(() => {
    res.json(response)
  }, 1000)
}

module.exports = { calculateLoan }
