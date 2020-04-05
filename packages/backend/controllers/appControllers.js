const calculateLoan = async (req, res) => {
  const { amount, duration } = req.body

  const response = {
    amount: Number(req.body.amount),
    duration: Number(req.body.duration),
    monthlyInstallment: Math.ceil((amount / (duration + 12)) * 1.9),
  }

  setTimeout(() => {
    res.json(response)
  }, 1000)
}

module.exports = { calculateLoan }
